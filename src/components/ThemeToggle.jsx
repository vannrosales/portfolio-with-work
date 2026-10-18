import { useState } from 'react';

export default function ThemeToggle() {
  // index.html applies the saved theme before paint, so read it straight from the DOM.
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.theme = next ? 'dark' : 'light';
  };

  return (
    <button
      onClick={toggleTheme}
      className="link font-serif italic text-lg leading-none focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {isDark ? 'Day' : 'Night'}
    </button>
  );
}
