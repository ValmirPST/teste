'use client';

import { darkTheme, StyledThemeProvider, theme } from '@unimake-ui/react';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';

type ThemeContextType = {
  theme: 'dark' | 'light';
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = usePersistedState<'light' | 'dark'>('theme', 'light');

  return (
    <StyledThemeProvider theme={activeTheme === 'light' ? theme : darkTheme}>
      <ThemeContext.Provider value={{ theme: activeTheme, setTheme: setActiveTheme }}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  );
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('No provider found for ThemeContext');
  return context;
}
