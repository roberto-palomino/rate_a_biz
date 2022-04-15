import { useState, useEffect } from 'react';
export function useLoadBusiness() {
  const [business, setBusiness] = useState([]);
  const loadBusiness = async () => {
    try {
      const res = await fetch('http://localhost:4000/business', {
        method: 'POST',
      });
      const body = await res.json();

      setBusiness(body.data.business);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadBusiness();
  }, []);

  return [business, setBusiness];
}
