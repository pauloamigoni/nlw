import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
 T,
 Dispatch<SetStateAction<T>>,
];

function usePersisteState<T>(key: string, initialSate: T): Response<T> {
  const [state, setState] = useState(() => {
    
    const storageValue = window.localStorage.getItem(key);
 
    if(storageValue){
        return JSON.parse(storageValue);
      }else{
        return initialSate;
      }
  });

  useEffect(() => {
   window.localStorage.setItem(key, JSON.stringify(state));
  }, [key,state])
  return [state, setState]
}
export default usePersisteState;