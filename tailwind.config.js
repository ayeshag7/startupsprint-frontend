/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          950: '#09090b',
          800: '#27272a',
          500: '#71717a',
          400: '#a1a1aa',
          50: '#fafafa',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}