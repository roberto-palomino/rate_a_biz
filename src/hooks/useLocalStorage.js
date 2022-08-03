import { useState, useEffect } from 'react';

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : ''
  );
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
};
