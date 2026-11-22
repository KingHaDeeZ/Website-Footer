import { useEffect, useState } from 'react';
import { SiteFooter } from './components/SiteFooter';
import type { ResolvedTheme, ThemePreference } from './components/ThemeSwitcher';

const STORAGE_KEY = 'baseline-theme';

function getInitialPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch {
    // Ignore storage read errors in restricted environments
  }
  return 'system';
}

function getSystemDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function App() {
  const [preference, setPreference] = useState<ThemePreference>(getInitialPreference);
  const [systemIsDark, setSystemIsDark] = useState<boolean>(getSystemDark);

  const resolvedTheme: ResolvedTheme =
    preference === 'system' ? (systemIsDark ? 'dark' : 'light') : preference;

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemIsDark(event.matches);
    };
    setSystemIsDark(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme-pref', preference);
    root.setAttribute('data-theme', resolvedTheme);
    root.classList.toggle('dark', resolvedTheme === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, preference);
    } catch {
      // Ignore storage write errors in restricted environments
    }
  }, [preference, resolvedTheme]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-end bg-[#f8f9fb] text-[#0d1524] transition-colors duration-200 dark:bg-[#090d16] dark:text-[#f1f5f9]">
      <SiteFooter
        themePreference={preference}
        resolvedTheme={resolvedTheme}
        onThemeChange={setPreference}
      />
    </div>
  );
}
