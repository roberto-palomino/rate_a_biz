import React from 'react';
import './style.css';

export const Avatar = (props) => {
  const { imageId, name } = props;
  return (
    <div className='avatar'>
      <img
        src={`${process.env.REACT_APP_BACKEND_URL}/${
          imageId || 'defaultAvatar.jpg'
        }`}
        alt={`Avatar de ${name}`}
      />
      <div>{name}</div>
    </div>
  );
};
