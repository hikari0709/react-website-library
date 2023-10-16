/** @type {import('tailwindcss').Config} */

type Property = {
  [key: string]: string;
};

type PropertyObject = {
  [key: string]: string | Property;
};

type Keyframe = {
  [key: string]: {
    transform: string;
  };
};

type Keyframes = {
  [key: string]: Keyframe;
};

interface CustomConfig {
  purge: Array<string>;
  content: Array<string>;
  theme: {
    extend: {
      margin: PropertyObject;
      animation: PropertyObject;
      keyframes: Keyframes;
      colors: PropertyObject;
    };
  };
  plugins: Array<string>;
}

const config: CustomConfig = {
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
        brand: {
          '50': '#fff0f0',
          '100': '#fee2e3',
          '200': '#fccccd',
          '300': '#f9aeb1',
          '400': '#ed7c80',
          '500': '#dd353c',
          '600': '#dd171f',
          '700': '#be171d',
          '800': '#9c181d',
          '900': '#7e1e22',
          '950': '#47080a',
        },
        background: '#f5f5f5',
        scrim: 'rgba(0, 0, 0, 0.3)',
        divider: {
          DEFAULT: 'rgba(0, 0, 0, 0.12)',
          primary: '#dc2626',
          error: '#be123c',
        },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};

export default config;
