/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,ts}'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
