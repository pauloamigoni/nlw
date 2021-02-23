import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
 T,
 Dispatch<SetStateAction<T>>,
];

function usePersisteState<T>(key: string, initialSate: T): Response<T> {
  const [state, setState] = useState(() => {
    
    if (typeof window !== 'undefined') {
    const storageValue = window.localStorage.getItem(key);

      if(storageValue){
        return JSON.parse(storageValue);
      }else{
        return initialSate;
      }
    }else{
      return initialSate;
    }
    
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
  }

  }, [key,state])
  return [state, setState]
}
export default usePersisteState;