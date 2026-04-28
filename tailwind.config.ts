import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1126',
        'navy-deep': '#060a18',
        cream: '#f3ecd8',
        'cream-muted': '#c9c4b3',
        gold: '#c9a24a',
        'gold-bright': '#e0b85a',
        'border-subtle': 'rgba(243,236,216,0.12)',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'Anton', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display-xl': 'clamp(48px,8vw,96px)',
        'display-lg': 'clamp(36px,5vw,64px)',
        'display-md': 'clamp(28px,3.5vw,42px)',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
