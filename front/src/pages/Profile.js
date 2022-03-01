import React, { useContext } from 'react';
// import EditUserForm from '../components/EditUser/EditUserForm/EditUserForm';
import EditUser from '../components/EditUser';

import useUserData from '../hooks/useUserData';
import { TokenContext } from '../index';
// import { Redirect } from 'react-router';

export const Profile = () => {
  const [token] = useContext(TokenContext);
  const [user] = useUserData(token);
  console.log('user', user, token);
  return (
    <div>
      <EditUser />
    </div>
  );
};

/* export const Profile = () => {
  const [token] = TokenContext();
  const [user] = useUserProfile(token);

  if (!token) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <h2> Perfil de usuario</h2>
      {Object.values(user).length > 0 && <EditUserForm id={user.id} />}
    </div>
  );
}; */
