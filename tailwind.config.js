/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-bottom':
          'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
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
        defaultBorder: '#ccc',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
