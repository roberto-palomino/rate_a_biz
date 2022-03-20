import { useState, useEffect } from 'react';
export function useLoadTopBusiness() {
  const [topBusiness, setTopBusiness] = useState([]);
  const [topBusinessInfo, setTopBusinessInfo] = useState([]);
  const loadTopBusiness = async () => {
    try {
      const res = await fetch('http://localhost:4000/getTopBusiness', {
        method: 'GET',
      });
      const body = await res.json();

      setTopBusiness(body.data.topBusiness);
      setTopBusinessInfo(body.data.reviews);
    } catch (e) {
      console.error('Err:', e);
    }
  };

  useEffect(() => {
    loadTopBusiness();
  }, []);
  return [topBusiness, setTopBusiness, topBusinessInfo, setTopBusinessInfo];
}
