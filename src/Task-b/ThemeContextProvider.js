import React from 'react';
import { ThemeProvider } from './ThemeContext';

const ThemeContextProvider = ({ children }) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
