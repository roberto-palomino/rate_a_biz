import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import './style.css';

const Avatar = (props) => {
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

export default Avatar;
