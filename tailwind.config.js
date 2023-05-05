/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'primary-color': '#8031A7',
        'primary-color': {
          100: '#E1C6EEFF',
          200: '#C38DDE',
          300: '#B471D5',
          400: '#A555CD',
          500: '#8031A7'
        }
      }
    },
  },
  plugins: [],
}

