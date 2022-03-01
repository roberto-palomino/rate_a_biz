import { useState, useEffect, useCallback } from 'react';
import decodeTokenData from '../helpers/decodeTokenData';

const useUserData = token => {
  const [user, setUser] = useState({});
  const decodedToken = decodeTokenData(token);

  const getUserData = useCallback(async () => {
    const urlUserData = `http://localhost:4000/users/${decodedToken.id}`;
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
  }, [decodedToken?.id, token]);

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [getUserData, token]);

  return [user, setUser];
};

export default useUserData;
