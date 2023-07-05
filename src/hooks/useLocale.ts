import { useEffect, useState } from 'react';

const getUserLocale = () => navigator.languages && navigator.languages.length
  ? navigator.languages[0]
  : navigator.language;

export const useLocale = () => {
  const [state, setState] = useState('en-US');

  useEffect(() => {
    setState(getUserLocale());
  }, []);

  return state;
};