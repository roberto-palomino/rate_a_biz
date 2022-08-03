import { useState, useEffect } from 'react';

export function useLoadBusinessProfile(id) {
  const [businessProfileInfo, setBusinessProfileInfo] = useState('');
  const loadBusinessProfile = async () => {
    try {
      const res = await fetch(`http://localhost:4000/business/${id}`, {
        method: 'POST',
      });
      const body = await res.json();

      setBusinessProfileInfo(body.data);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadBusinessProfile();
  }, []);
  return [businessProfileInfo, setBusinessProfileInfo];
}
