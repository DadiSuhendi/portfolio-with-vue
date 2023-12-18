/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'monaSans': 'monaSans'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

