import { useEffect, useState } from 'react';
import './EditAvatar.css';

const DEFAULT_AVATAR = '/assets/images/default-avatar.jpeg';

const EditAvatar = () => {
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

  async function getUserImage() {
    const urlAvatar = 'http://localhost:4000/users/13';
    try {
      const response = await fetch(urlAvatar);
      const responseData = await response.json();
      const refreshImage = responseData.data.user.avatar;
      setAvatar(`http://localhost:4000/static/uploads/${refreshImage}`);
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
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className='avatar-section'>
      <form onSubmit={uploadFile}>
        <label>
          <div className='container'>
            <div className='avatar'>
              {avatar && <img src={avatar} alt='imagen avatar' />}
            </div>
          </div>
          <input type={'file'} onChange={onFileChange} />
        </label>
        <button className='avatar-form-button'>Guardar</button>
      </form>
    </div>
  );
};

export default EditAvatar;
