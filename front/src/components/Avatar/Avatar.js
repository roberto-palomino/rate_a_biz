import React from 'react';
import './Avatar.css';
import avatarLogo from '../../assets/images/default-avatar.jpeg';

const Avatar = props => {
  const { avatarUrl, username, size } = props;
  return (
    <>
      <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
        <img
          className='image-avatar'
          src={avatarUrl ? avatarUrl : avatarLogo}
          alt={`avatar de ${username || 'usuario'}`}
        />
      </div>
      <figcaption className='avatar-username'>{`${
        username || 'usuario'
      }`}</figcaption>
    </>
  );
};
export default Avatar;
