import { useState, useEffect, useCallback } from 'react';
import decodeTokenData from '../helpers/decodeTokenData';

const useBusinessData = (token, hasUpdated) => {
  const [business, setBusiness] = useState({});
  const decodedToken = decodeTokenData(token);
  const businessId = decodedToken?.id;

  // console.log('business', businessId);

  const getBusinessData = useCallback(async () => {
    const urlBusinessData = `http://localhost:4000/business/${businessId}`;
    try {
      const response = await fetch(urlBusinessData, {
        headers: {
          Authorization: token,
        },
      });
      const responseData = await response.json();
      const businessData = responseData.data.businessInfo;
      // console.log(responseData.data.businessInfo);

      setBusiness(businessData);
    } catch (error) {
      console.error(error);
    }
  }, [businessId, token]);

  useEffect(() => {
    if (token || hasUpdated) {
      getBusinessData();
    }
  }, [getBusinessData, token, hasUpdated]);

  return { business };
};

export default useBusinessData;
