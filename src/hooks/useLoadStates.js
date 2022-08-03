import { useState, useEffect } from 'react';
export function useLoadStates() {
  const [states, setStates] = useState([]);
  const loadStates = async () => {
    try {
      const res = await fetch('http://localhost:4000/states', {
        method: 'GET',
      });
      const body = await res.json();

      setStates(body.data.state);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadStates();
  }, []);
  return [states, setStates];
}
