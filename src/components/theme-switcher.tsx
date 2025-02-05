'use client';

import { styled, useTheme } from '@unimake-ui/react';
import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../contexts/theme-context';

const Switcher = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();
  const themeProps = useTheme();

  return (
    <Switcher onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}>
      {theme === 'light' ? (
        <Sun color={themeProps.colors.gray700} size={20} />
      ) : (
        <Moon color={themeProps.colors.gray700} size={20} />
      )}
    </Switcher>
  );
}
