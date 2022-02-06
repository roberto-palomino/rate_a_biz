import { useState, useEffect } from 'react';
export function useLoadStates() {
  const [states, setStates] = useState([]);
  const loadStates = async (e) => {
    try {
      const res = await fetch('http://localhost:4000/states', {
        method: 'GET',
        mode: 'no-cors',
      });
      /* const body = await res.json(); */

      console.log(res);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadStates();
  }, []);
  return [states, setStates];
}
