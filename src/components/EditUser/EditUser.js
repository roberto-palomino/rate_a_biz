import React from 'react';
import EditTabs from '../EditTabs';
import './EditUser.css';

//  La prop onUpdated es un evento con el que comunicamos al padre si se han actualizado o no los datos del usuario
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
