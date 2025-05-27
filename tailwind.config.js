/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          dark: '#BFA100',
          400: '#FFD700',
          500: '#FFD700',
          600: '#BFA100',
          700: '#8F7A00',
        },
        background: {
          DEFAULT: '#18181b',
          dark: '#09090b',
        },
        foreground: {
          DEFAULT: '#f4f4f5',
          dark: '#a1a1aa',
        },
      },
    },
  },
  plugins: [],
};
