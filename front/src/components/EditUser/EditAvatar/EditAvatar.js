import { useEffect, useState } from 'react';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './EditAvatar.css';

const DEFAULT_AVATAR = '/assets/images/default-avatar.jpeg';

const EditAvatar = () => {
  const [image, setImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(DEFAULT_AVATAR);
  const [isEditing, setIsEditing] = useState(false);

  const ShowButtonAvatar = () => {
    return <button className='avatar-form-button'>Guardar</button>;
  };

  async function getUserImage() {
    const urlAvatar = 'http://localhost:4000/users/13';
    try {
      const response = await fetch(urlAvatar);
      const responseData = await response.json();
      const refreshImage = responseData.data.user.avatar;

      setAvatarUrl(`http://localhost:4000/static/uploads/${refreshImage}`);
    } catch (error) {
      console.error(error);
    }
  }
  // TODO: ENVIAR MENSAJES A LOS USUARIOS

  useEffect(() => {
    getUserImage();
  }, []);

  const uploadFile = async e => {
    e.preventDefault();

    try {
      let data = new FormData();
      data.append('avatar', image);
      const response = await fetch('http://localhost:4000/users/13/avatar', {
        method: 'PUT',
        body: data,
      });
      const responseData = await response.json();
      if (responseData.status === 'ok') {
        setIsEditing(false);
        // TODO: Implementar mensajes mostrado al usuario
        console.log('La imagen se ha subido correctamente');
      }
    } catch (error) {
      console.error('Ha surgido un error al intentar subir la imagen');
    }
  };

  const onFileChange = event => {
    const image = event.target.files[0];
    setImage(image);
    if (event.target.files.length > 0) {
      setIsEditing(true);
      setAvatarUrl(URL.createObjectURL(image));
    }
  };

  return (
    <div className='avatar-section'>
      <form onSubmit={uploadFile}>
        <div className='container'>
          <div className='avatar'>
            {avatarUrl && <img src={avatarUrl} alt='imagen avatar' />}
          </div>
          <label className='label-avatar' htmlFor='input-avatar'>
            <AddAPhotoIcon fontSize='large' />
            Selecciona una imagen
          </label>
          <input
            type={'file'}
            name='input-avatar'
            id='input-avatar'
            className='input-avatar'
            onChange={onFileChange}
          />
          {isEditing && <ShowButtonAvatar />}
        </div>
      </form>
    </div>
  );
};

export default EditAvatar;
