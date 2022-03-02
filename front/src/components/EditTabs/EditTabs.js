import React, { useState } from 'react';
import EditUserForm from '../EditUser/EditUserForm';
import EditUserPass from '../EditUser/EditUserPass';
import './EditTabs.css';

const EditTabs = props => {
  const { user } = props;
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
        {activeTab === 'personal-data' && <EditUserForm user={user} />}
        {activeTab === 'password' && <EditUserPass user={user} />}
      </div>
    </>
  );
};

export default EditTabs;
