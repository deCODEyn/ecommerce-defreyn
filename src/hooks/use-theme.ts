import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  const applyThemeToHtml = useCallback((currentTheme: Theme) => {
    const html = document.documentElement;
    currentTheme === 'light'
      ? html.classList.add('dark')
      : html.classList.remove('dark');
  }, []);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeState(savedTheme);
      applyThemeToHtml(savedTheme);
    } else {
      const initialTheme: Theme = 'dark';
      setThemeState(initialTheme);
      applyThemeToHtml(initialTheme);
      localStorage.setItem('theme', initialTheme);
    }
  }, [applyThemeToHtml]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem('theme', newTheme);
      applyThemeToHtml(newTheme);
    },
    [applyThemeToHtml]
  );

  return { theme, setTheme, mounted };
}
