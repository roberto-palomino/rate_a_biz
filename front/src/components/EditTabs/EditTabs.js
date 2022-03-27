import React, { useState } from 'react';
import EditUserForm from '../EditUser/EditUserForm';
import EditUserPass from '../EditUser/EditUserPass';
import EditBusinessForm from '../EditUser/EditBusinessForm/EditBusinessForm';
import './EditTabs.css';

const EditTabs = props => {
  const { user, userId, onUpdated, userRole, business } = props;
  const [activeTabUser, setActiveTabUser] = useState(
    userRole === 'business' ? 'business-data' : 'personal-data'
  );

  return (
    <>
      <div className='tabs-container'>
        <h2>Tu cuenta</h2>
        <button
          className='tabs-button'
          onClick={() => {
            setActiveTabUser(
              userRole === 'business' ? 'business-data' : 'personal-data'
            );
          }}
        >
          Mi Perfil
        </button>
        <button
          className='tabs-button'
          onClick={() => {
            setActiveTabUser('password');
          }}
        >
          Contraseña
        </button>
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
      </div>
    </>
  );
};

export default EditTabs;
