import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type StateReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(key: string, initialState: T): StateReturnType<T> {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    const storaged = window.localStorage.getItem(key);
    if (storaged) {
      setState(JSON.parse(storaged));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
