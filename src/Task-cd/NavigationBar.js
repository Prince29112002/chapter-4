// NavigationBar.js
import React from 'react';
import { useTheme } from '../Task-b/ThemeContext';

const NavigationBar = () => {
  const { theme, toggleTheme, themes } = useTheme();

  if (!themes[theme]) {
    // Handle the case where the current theme is not defined
    return null;
  }

  const navBarStyle = {
    backgroundColor: themes[theme].backgroundColor,
    color: themes[theme].color,
    padding: '10px',
  };

  return (
    <div style={navBarStyle}>
      <h2>Navigation Bar</h2>
      <p>Current Theme Is: {theme}</p>
      <div>
        {Object.keys(themes).map((themeOption) => (
          <button key={themeOption} onClick={() => toggleTheme(themeOption)}>
            {themeOption}
          </button>
        ))}
      </div>
      {/* Add your navigation links or components here */}
    </div>
  );
};

export default NavigationBar;
