import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ setTheme }) => {
  return (
    <div onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")} className="theme-toggle">
      {document.body.classList.contains("dark") ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggle;
