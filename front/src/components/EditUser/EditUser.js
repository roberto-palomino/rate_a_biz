import React from 'react';
import EditTabs from '../EditTabs';

import './EditUser.css';

function EditUser(props) {
  const { user, userId, onUpdated } = props;
  return (
    <div className='main-section'>
      <EditTabs user={user} userId={userId} onUpdated={onUpdated} />
    </div>
  );
}

export default EditUser;
