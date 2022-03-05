import React, { useContext, useState } from 'react';
import EditUser from '../components/EditUser';
import useUserData from '../hooks/useUserData';
import { TokenContext } from '../index';
import './Profile.css';

export const Profile = () => {
  const [hasUpdated, setHasUpdated] = useState(false);
  const [token] = useContext(TokenContext);
  const { user, userId } = useUserData(token, hasUpdated);

  return (
    <div>
      <EditUser user={user} userId={userId} onUpdated={setHasUpdated} />
    </div>
  );
};
