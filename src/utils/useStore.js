import { useState, useEffect } from 'react';
import posts from '../data/blog-posts.json';

const useStore = (storeName, initialState) => {
  // let storage = null;
  // try {
  //   storage = JSON.parse(localStorage.getItem(storeName))
  // } catch {
  //   storage= null;
  //   localStorage.clear();
  // }
  //   const [state, setCurrentState] = useState(
  //     storage || initialState
  //   );
  const [state, setCurrentState] = useState(posts || initialState);
  const setState = (newState) => {
    setCurrentState(newState);
    //localStorage.setItem(storeName, JSON.stringify(newState));
  };

  useEffect(() => {
    setCurrentState(posts);
  }, []);

  return [state, setState];
};

export default useStore;
