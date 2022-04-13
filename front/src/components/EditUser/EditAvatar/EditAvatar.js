import { useEffect, useState, useCallback, useContext } from 'react';

import BackupIcon from '@material-ui/icons/Backup';
import Avatar from '../../Avatar';
import { TokenContext } from '../../../index';
import './EditAvatar.css';

const EditAvatar = props => {
  const { user, userId, onUpdated } = props;
  const [token] = useContext(TokenContext);
  const [image, setImage] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const ShowButtonAvatar = () => {
    return <button className='avatar-form-button'>Guardar</button>;
  };

  const getUserImage = useCallback(() => {
    const userAvatar = user?.avatar;
    userAvatar &&
      setAvatarUrl(`http://localhost:4000/static/uploads/${userAvatar}`);
  }, [user]);
  // TODO: ENVIAR MENSAJES A LOS USUARIOS

  useEffect(() => {
    getUserImage();
  }, [getUserImage]);

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
      if (responseData.status === 'ok') {
        onUpdated(true);
        // TODO: Implementar mensajes mostrado al usuario
        console.log('La imagen se ha subido correctamente');
      }
    } catch (error) {
      console.error('Ha surgido un error al intentar subir la imagen');
    }
  };

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
      <form onSubmit={uploadFile}>
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
