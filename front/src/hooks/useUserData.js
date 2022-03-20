import { useState, useEffect, useCallback } from 'react';
import decodeTokenData from '../helpers/decodeTokenData';

const useUserData = (token, hasUpdated) => {
  const [user, setUser] = useState({});
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
  }, [userId, token]);

  useEffect(() => {
    if (token || hasUpdated) {
      getUserData();
    }
  }, [getUserData, token, hasUpdated]);

  return { user, setUser, userId, userRole };
};

export default useUserData;
