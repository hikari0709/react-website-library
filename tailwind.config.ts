/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      margin: {
        '-1px': '-1px',
      },
      animation: {
        'slide-bottom':
          'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'slide-bottom': {
          '0%': {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(100px)',
          },
        },
      },
      colors: {
        background: { DEFAULT: '#f5f5f5' },
        scrim: { DEFAULT: 'rgba(0, 0, 0, 0.3)' },
        divider: {
          DEFAULT: 'rgba(0, 0, 0, 0.12)',
          primary: '#dc2626',
          error: '#be123c',
        },
      },
    },
  },
};

export default config;
