/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'Pretendard', 'Tossface'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
