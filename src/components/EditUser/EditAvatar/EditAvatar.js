import { useEffect, useState, useCallback, useContext } from 'react';
import BackupIcon from '@material-ui/icons/Backup';
import Avatar from '../../Avatar';
import { TokenContext } from '../../../index';
import toast, { Toaster } from 'react-hot-toast';
import './EditAvatar.css';

//  La prop onUpdated es un evento con el que comunicamos al padre si se ha actualizado o no el avatar
const EditAvatar = props => {
  const { user, userId, onUpdated } = props;
  const [token] = useContext(TokenContext);
  const [image, setImage] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  //  Se muestra este botón cuando la edición está habilitada
  const ShowButtonAvatar = () => {
    return <button className='avatar-form-button'>Guardar</button>;
  };

  //  Escuchamos los cambios de user para poder obtener el avatar
  const getUserImage = useCallback(() => {
    const userAvatar = user?.avatar;
    userAvatar &&
      setAvatarUrl(`http://localhost:4000/static/uploads/${userAvatar}`);
  }, [user]);

  useEffect(() => {
    getUserImage();
  }, [getUserImage]);

  // Mientras no se esté editando el avatar mantenemos el onUpdated en false
  useEffect(() => {
    onUpdated && !isEditing && onUpdated(false);
  }, [onUpdated, isEditing]);

  const uploadFile = async e => {
    e.preventDefault();
    setIsEditing(false);
    try {
      let data = new FormData();
      data.append('avatar', image);
      const response = await fetch(
        `http://localhost:4000/users/${userId}/avatar`,
        {
          method: 'PUT',
          body: data,
          headers: {
            Authorization: token,
          },
        }
      );

      const responseData = await response.json();
      const message = responseData.message;
      if (responseData.status === 'ok') {
        // Cuando obtenemos respuesta del servidor con el cambio en el avatar, informamos al padre de que se ha actualizado
        onUpdated(true);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(
        `Error al intentar acceder al avatar del usuario ${userId}: ${error}`
      );
    }
  };

  //  Setea la imagen y la url para poder previsualizar el avatar mientras se está editando
  const onFileChange = event => {
    const imageObj = event.target.files[0];
    setImage(imageObj);

    if (event.target.files.length > 0) {
      setIsEditing(true);
      setAvatarUrl(URL.createObjectURL(imageObj));
    }
  };

  return (
    <div className='avatar-section'>
      <div>
        <Toaster />
      </div>
      <form className='avatar-form' onSubmit={uploadFile}>
        <div className='avatar-container'>
          <Avatar
            avatarUrl={avatarUrl}
            username={user?.username}
            size='medium'
          />
        </div>
        <label className='label-avatar' htmlFor='input-avatar'>
          <BackupIcon fontSize='medium' />
          Selecciona una foto
          {isEditing && <ShowButtonAvatar />}
        </label>
        <input
          type={'file'}
          name='input-avatar'
          id='input-avatar'
          className='input-avatar'
          onChange={onFileChange}
        />
      </form>
    </div>
  );
};

export default EditAvatar;
