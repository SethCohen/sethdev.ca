/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
}
