/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useMemo, createContext } from 'react';
import localStorageData from '../utils/localStorageData';

export const ThemeContext = createContext({ theme: 'light', undefined });
export function ThemeProvider({ children }) {
  localStorageData('SET', 'theme', 'light');
  const [theme, setTheme] = useState('light');
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
