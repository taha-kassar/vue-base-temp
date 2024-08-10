/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00D2FF',
        secondary: '#9389BB',
        black: '#333333',
        gray: '#808080',
        usdt: '#26A17B',
        success: '#039855',
        error: '#f44e42'
      }
    }
  },
  plugins: []
}
