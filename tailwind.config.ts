import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      bg: 'var(--color-bg)',
      surface: 'var(--color-surface)',
      text: 'var(--color-text)',
      muted: 'var(--color-muted)',
      accent: 'var(--color-accent)',
      border: 'var(--color-border)',
      gold: 'var(--color-gold)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      boxShadow: {
        luxe: 'var(--shadow-luxe)',
      },
      borderRadius: {
        luxe: 'var(--radius-luxe)',
      },
    },
  },
  plugins: [],
} satisfies Config;
