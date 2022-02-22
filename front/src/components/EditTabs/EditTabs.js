import React, { useState } from 'react';
import EditUserForm from '../EditUser/EditUserForm';
import EditUserPass from '../EditUser/EditUserPass/EditUserPass';
import './EditTabs.css';

const EditTabs = () => {
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
        {activeTab === 'personal-data' && <EditUserForm />}
        {activeTab === 'password' && <EditUserPass />}
      </div>
    </>
  );
};

export default EditTabs;
