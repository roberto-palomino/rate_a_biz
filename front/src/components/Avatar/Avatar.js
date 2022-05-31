import React from 'react';
import './Avatar.css';
import avatarLogo from '../../assets/images/default-avatar.jpeg';

// Se añade hideFigcaption como prop al componente Avatar, para poder ocultar o mostrar el nombre del usuario.
const Avatar = props => {
  const { avatarUrl, username, size, hideFigCaption } = props;
  return (
    <div className='avatar-container'>
      <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
        <img
          className='image-avatar'
          // Por defecto se muestra una imagen por si no se proporciona una url
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
