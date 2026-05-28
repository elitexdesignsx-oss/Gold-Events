import { Moon, Sun } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useTheme } from '../../context/ThemeContext';

const icons = {
  noir: Moon,
  ivoire: Sun,
};

export default function ThemeSwitcher() {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className="theme-switcher" aria-label="Theme switcher">
      {themes.map((item) => {
        const Icon = icons[item.id];
        return (
          <button
            key={item.id}
            type="button"
            className={theme === item.id ? 'is-active' : ''}
            onClick={() => setTheme(item.id)}
            aria-label={`Theme ${item.label}`}
            aria-pressed={theme === item.id}
            title={item.label}
          >
            <span className="theme-dot" style={{ '--dot': item.swatch } as CSSProperties}>
              <Icon size={12} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
