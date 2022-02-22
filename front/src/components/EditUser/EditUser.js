import React from 'react';
import EditTabs from '../EditTabs';
import EditAvatar from './EditAvatar';
import './EditUser.css';

function EditUser() {
  return (
    <div className='main-section'>
      <EditTabs />
      <EditAvatar />
    </div>
  );
}

export default EditUser;
