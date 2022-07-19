import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

// This Theme Context Wrapper will take in props and update our context accordingly when required.

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('light-mode');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('light-mode');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}