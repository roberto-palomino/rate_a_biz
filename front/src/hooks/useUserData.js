import { useEffect, useCallback } from 'react';
import decodeTokenData from '../helpers/decodeTokenData';
import { useUserContext } from '../components/contexts/UserContext';

const useUserData = (token, hasUpdated) => {
  // Seteamos el context con el valor del usuario recuperado del servidor
  const [user, setUser] = useUserContext();
  const decodedToken = decodeTokenData(token);
  const userId = decodedToken?.id;
  const userRole = decodedToken?.role;

  const getUserData = useCallback(async () => {
    const urlUserData = `http://localhost:4000/users/${userId}`;
    try {
      const response = await fetch(urlUserData, {
        headers: {
          Authorization: token,
        },
      });
      const responseData = await response.json();
      const userData = responseData.data.user;
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  }, [userId, token, setUser]);

  // Si hay token o se ha actualizado un usuario, pedimos una actualización de datos al servidor
  useEffect(() => {
    if (token || hasUpdated) {
      getUserData();
    }
  }, [getUserData, token, hasUpdated]);

  return { user, setUser, userId, userRole };
};

export default useUserData;
