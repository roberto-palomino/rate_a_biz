import React, { useEffect, useState } from 'react';
import EditUserForm from '../EditUser/EditUserForm';
import EditUserPass from '../EditUser/EditUserPass';
import EditBusinessForm from '../EditUser/EditBusinessForm/EditBusinessForm';
import { Tab } from '@material-ui/core';
import Avatar from '../Avatar';
import EditAvatar from '../EditUser/EditAvatar';
import './EditTabs.css';

const EditTabs = props => {
  const { user, userId, onUpdated, userRole, business } = props;
  const [activeTabUser, setActiveTabUser] = useState('personal-data');
  useEffect(() => {
    if (userRole === 'business') {
      setActiveTabUser('business-data');
    }
  }, [userRole]);
  const avatarUrl = user?.avatar
    ? `http://localhost:4000/static/uploads/${user?.avatar}`
    : '';

  return (
    <div className='tabs'>
      <div className='tabs-container'>
        <Avatar avatarUrl={avatarUrl} username={user?.username} size='medium' />

        <Tab
          fullWidth
          label='Datos personales'
          className='tabs-button'
          onClick={() => {
            setActiveTabUser(
              userRole === 'business' ? 'business-data' : 'personal-data'
            );
          }}
        ></Tab>
        <Tab
          fullWidth
          label='Cambiar contraseña'
          className='tabs-button'
          onClick={() => {
            setActiveTabUser('password');
          }}
        ></Tab>
        <Tab
          fullWidth
          label='Cambiar avatar'
          className='tabs-button'
          onClick={() => {
            setActiveTabUser('edit-avatar');
          }}
        ></Tab>
      </div>

      <div className='tabs-content'>
        {userRole === 'business' && activeTabUser === 'business-data' && (
          <EditBusinessForm
            user={user}
            userId={userId}
            onUpdated={onUpdated}
            business={business}
          />
        )}
        {userRole === 'worker' && activeTabUser === 'personal-data' && (
          <EditUserForm user={user} userId={userId} onUpdated={onUpdated} />
        )}
        {activeTabUser === 'password' && (
          <EditUserPass user={user} userId={userId} />
        )}
        {/* <div className='avatar-tabs-container'> */}
        {activeTabUser === 'edit-avatar' && (
          <EditAvatar user={user} userId={userId} onUpdated={onUpdated} />
        )}
      </div>
    </div>
  );
};

export default EditTabs;
