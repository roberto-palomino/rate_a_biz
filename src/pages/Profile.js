import React, { useContext, useState } from 'react';
import EditUser from '../components/EditUser';
import useUserData from '../hooks/useUserData';
import useBusinessData from '../hooks/useBusinessData';
import { TokenContext } from '../index';

export const Profile = () => {
  const [token] = useContext(TokenContext);
  // Utilizamos el valor del evento onUpdated para forzar una petición al servidor con hasUpdated
  const [hasUpdated, setHasUpdated] = useState(false);
  const { user, userId, userRole } = useUserData(token, hasUpdated);
  const { business } = useBusinessData(token, hasUpdated);

  return (
    <>
      <EditUser
        user={user}
        userId={userId}
        onUpdated={setHasUpdated}
        userRole={userRole}
        business={business}
      />
    </>
  );
};
