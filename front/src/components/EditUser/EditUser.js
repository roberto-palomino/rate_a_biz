import React from 'react';
import EditTabs from '../EditTabs';

import './EditUser.css';

function EditUser(props) {
  const { user } = props;
  return (
    <div className='main-section'>
      <EditTabs user={user} />
    </div>
  );
}

export default EditUser;
