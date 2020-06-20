import { useState, useEffect } from 'react';
import posts from '../data/blog-posts.json';

export const useStore = (storeName, initialState) => {
  const [state, setCurrentState] = useState(posts || initialState);
  const setState = (newState) => {
    setCurrentState(newState);
  };

  useEffect(() => {
    setState(posts);
  }, []);

  return [state, setState];
};
