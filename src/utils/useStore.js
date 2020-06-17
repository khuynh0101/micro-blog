import { useState } from 'react';

const useStore = (storeName, initialState) => {
  let storage = null;
  try {
    storage = JSON.parse(localStorage.getItem(storeName)) 
  } catch {
    storage= null;
    localStorage.clear();
  }
    const [state, setCurrentState] = useState(
      storage || initialState
    );

    const setState = (newState) => {
      setCurrentState(newState);
      localStorage.setItem(storeName, JSON.stringify(newState));
    };
    return [state, setState];
 
};

export default useStore;
