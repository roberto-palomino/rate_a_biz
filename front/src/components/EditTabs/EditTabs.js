import React, { useState } from 'react';
import EditUserForm from '../EditUser/EditUserForm';
import EditUserPass from '../EditUser/EditUserPass';
import './EditTabs.css';

const EditTabs = props => {
  const { user, userId, onUpdated } = props;
  const [activeTab, setActiveTab] = useState('personal-data');

  return (
    <>
      <div className='tabs-container'>
        <h2>Tu cuenta</h2>
        <button
          className='tabs-button'
          onClick={() => {
            setActiveTab('personal-data');
          }}
        >
          Datos personales
        </button>
        <button
          className='tabs-button'
          onClick={() => {
            setActiveTab('password');
          }}
        >
          Contraseña
        </button>
      </div>
      <div className='tabs-content'>
        {activeTab === 'personal-data' && (
          <EditUserForm user={user} userId={userId} onUpdated={onUpdated} />
        )}
        {activeTab === 'password' && (
          <EditUserPass user={user} userId={userId} />
        )}
      </div>
    </>
  );
};

export default EditTabs;
