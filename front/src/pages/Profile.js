import React, { useContext } from 'react';
import EditUser from '../components/EditUser';
import useUserData from '../hooks/useUserData';
import { TokenContext } from '../index';

export const Profile = () => {
  const [token] = useContext(TokenContext);
  const [user] = useUserData(token);

  return (
    <div>
      <EditUser user={user} />
    </div>
  );
};
