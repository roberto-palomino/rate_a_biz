import { useState, useEffect, useCallback } from 'react';
import decodeTokenData from '../helpers/decodeTokenData';

const useBusinessData = (token, hasUpdated) => {
  const [business, setBusiness] = useState({});
  const decodedToken = decodeTokenData(token);
  const businessId = decodedToken?.id;
  const businessRole = decodedToken?.role;

  const getBusinessData = useCallback(async () => {
    if (businessRole === 'business') {
      const urlBusinessData = `http://localhost:4000/business/${businessId}`;

      try {
        const response = await fetch(urlBusinessData, {
          headers: {
            Authorization: token,
          },
        });

        const responseData = await response.json();
        const businessData = responseData.data;
        setBusiness(businessData);
      } catch (error) {
        console.error(error);
      }
    }
  }, [businessId, token, businessRole]);

  useEffect(() => {
    if (token || hasUpdated || businessRole === 'business') {
      getBusinessData();
    }
  }, [getBusinessData, token, hasUpdated, businessRole]);

  return { business };
};

export default useBusinessData;
