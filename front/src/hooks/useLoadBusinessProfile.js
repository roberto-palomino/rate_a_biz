import { useState, useEffect } from 'react';
import { BusinessProfile } from '../pages/BusinessProfile';
export function useLoadBusinessProfile() {
  const [businessProfile, setBusinessProfile] = useState([]);
  const loadBusiness = async () => {
    try {
      const res = await fetch('http://localhost:4000/business/1', {
        method: 'GET',
      });
      const body = await res.json();

      setBusinessProfile(body.data);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadBusiness();
  }, []);

  return [businessProfile, setBusinessProfile];
}
