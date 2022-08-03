import { useState, useEffect } from 'react';
export function useLoadJobs() {
  const [jobs, setJobs] = useState([]);
  const loadJobs = async () => {
    try {
      const res = await fetch('http://localhost:4000/jobs', {
        method: 'GET',
      });
      const body = await res.json();

      setJobs(body.data.job);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  useEffect(() => {
    loadJobs();
  }, []);
  return [jobs, setJobs];
}
