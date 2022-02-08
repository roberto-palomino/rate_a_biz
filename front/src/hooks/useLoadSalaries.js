import { useState, useEffect } from 'react';
export function useLoadSalaries() {
  const [salaries, setSalaries] = useState([]);
  const loadSalaries = async () => {
    try {
      const res = await fetch('http://localhost:4000/salaries', {
        method: 'GET',
      });
      const body = await res.json();

      setSalaries(body.data.salaries_range);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadSalaries();
  }, []);
  return [salaries, setSalaries];
}
