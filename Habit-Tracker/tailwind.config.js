/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'], // si usás esta fuente
      },
    },
  },
  plugins: [],
};