import React from 'react';
import './Avatar.css';
import avatarLogo from '../../assets/images/default-avatar.jpeg';

const DEFAULT_AVATAR_URL = './default-avatar.jpeg';

const Avatar = (props) => {
  const { avatarUrl, username, size, figcaption } = props;
  return (
    <>
      <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
        <img
          src={avatarUrl ? avatarUrl : avatarLogo}
          alt={`avatar de ${username || 'usuario'}`}
        />
      </div>
      {figcaption ? (
        <figcaption className='avatar-username'>{`${
          username || 'usuario'
        }`}</figcaption>
      ) : null}
    </>
  );
};
export default Avatar;
