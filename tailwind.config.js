/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'graphik-web': ['Graphik Web', 'Helvetica Neue', 'Helvetica', 'Arial', 'Verdana', 'sans-serif'],
        'means-web': ['Noto Serif Georgian','serif']
      }
    },
    screens: {
      'm-2xl': {'max': '1535px'},

      'm-xl': {'max': '1279px'},

      'm-lg': {'max': '1023px'},

      'm-md': {'max': '767px'},

      'm-sm': {'max': '639px'},

      '2xl': {'min': '1535px'},

      'xl': {'min': '1279px'},

      'lg': {'min': '1023px'},

      'md': {'min': '767px'},

      'sm': {'min': '639px'},
    },
  },
  plugins: [],
}