import React from 'react';
import './Avatar.css';
import avatarLogo from '../../assets/images/default-avatar.jpeg';

// Se añaden al componente Avatar las props: hideFigCaption, size y avatarUrl. Para ocultar el nombre del usuario
// para seleccionar el tamaño del avatar y para indicar la ruta al archivo de imagen.

const Avatar = props => {
  const { avatarUrl, username, size, hideFigCaption } = props;
  return (
    <div className='avatar-container'>
      <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
        <img
          className='image-avatar'
          src={avatarUrl ? avatarUrl : avatarLogo}
          alt={`avatar de ${username || 'usuario'}`}
        />
      </div>
      {!hideFigCaption && (
        <figcaption className='avatar-username'>{`${
          username || 'usuario'
        }`}</figcaption>
      )}
    </div>
  );
};
export default Avatar;
