// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  light: { backgroundColor: '#f0f0f0', color: '#000' },
  dark: { backgroundColor: '#333', color: '#fff' },
  blue: { backgroundColor: '#3498db', color: '#fff' },
  red: { backgroundColor: '#e74c3c', color: '#fff' },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  if (!themes[theme]) {
    // Handle the case where the current theme is not defined
    // You can set a default theme here or return an error message
    setTheme('light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
