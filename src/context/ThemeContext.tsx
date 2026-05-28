import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type ThemeName = 'noir' | 'ivoire';

type ThemeOption = {
  id: ThemeName;
  label: string;
  swatch: string;
};

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeOption[];
};

const themes: ThemeOption[] = [
  { id: 'noir', label: 'Noir', swatch: '#080808' },
  { id: 'ivoire', label: 'Ivoire', swatch: '#E9E3DD' },
];

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const saved = window.localStorage.getItem('gold-events-theme') as ThemeName | null;
    return saved && themes.some((item) => item.id === saved) ? saved : 'noir';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('gold-events-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
      themes,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}
