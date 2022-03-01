import React from 'react';
import './Avatar.css';

const DEFAULT_AVATAR_URL =
  'http://localhost:4000/static/uploads/default-avatar.jpeg';

const Avatar = props => {
  const { avatarUrl, username, size } = props;
  return (
    <div className={`avatar ${size === 'medium' ? 'medium' : 'small'}`}>
      <img
        src={avatarUrl || DEFAULT_AVATAR_URL}
        alt={`avatar de ${username || 'usuario'}`}
      />
    </div>
  );
};
export default Avatar;
