import React, { useState } from 'react';
import EditUserForm from '../EditUser/EditUserForm';
import EditBusinessForm from '../EditUser/EditBusinessForm';
import EditUserPass from '../EditUser/EditUserPass';
import './EditTabs.css';
import EditBusinessData from '../EditUser/EditBusinessForm/EditBusinessData';

const EditTabs = props => {
  const { user, userId, onUpdated, userRole, business } = props;
  const [activeTab, setActiveTab] = useState('personal-data');
  // console.log(business);

  if (userRole === 'business') {
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
          <button
            className='tabs-button'
            onClick={() => {
              setActiveTab('business-data');
            }}
          >
            Datos de empresa
          </button>
        </div>
        <div className='tabs-content'>
          {activeTab === 'personal-data' && (
            <EditBusinessForm
              user={user}
              userId={userId}
              onUpdated={onUpdated}
            />
          )}
          {activeTab === 'password' && (
            <EditUserPass user={user} userId={userId} />
          )}
          {activeTab === 'business-data' && (
            <EditBusinessData
              user={user}
              userId={userId}
              onUpdated={onUpdated}
              business={business}
            />
          )}
        </div>
      </>
    );
  }
  if (userRole === 'worker') {
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
  }
};

export default EditTabs;
