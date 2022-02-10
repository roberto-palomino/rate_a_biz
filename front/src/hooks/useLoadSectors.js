import { useState, useEffect } from 'react';
export function useLoadSectors() {
  const [sectors, setSectors] = useState([]);
  const loadSectors = async () => {
    try {
      const res = await fetch('http://localhost:4000/sectors', {
        method: 'GET',
      });
      const body = await res.json();

      setSectors(body.data.sector);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadSectors();
  }, []);
  return [sectors, setSectors];
}
