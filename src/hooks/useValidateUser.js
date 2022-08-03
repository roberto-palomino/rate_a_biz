import { useState, useEffect } from 'react';

export function useValidateUser(registrationCode) {
  const [user, setUser] = useState('');
  const validateUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/validate/${registrationCode}`,
        {
          method: 'GET',
        }
      );
      const body = await res.json();
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    validateUser();
  }, []);
  return [user, setUser];
}
