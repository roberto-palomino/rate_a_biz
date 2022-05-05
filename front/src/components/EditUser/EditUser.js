import React from 'react';
import EditTabs from '../EditTabs';
import './EditUser.css';

function EditUser(props) {
  const { user, userId, onUpdated, userRole, business } = props;

  return (
    <div className='main-section'>
      <h2 className='title'>Datos de mi cuenta</h2>
      <EditTabs
        user={user}
        userId={userId}
        onUpdated={onUpdated}
        userRole={userRole}
        business={business}
      />
    </div>
  );
}

export default EditUser;
