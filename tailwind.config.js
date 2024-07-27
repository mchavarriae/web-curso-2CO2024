/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: "class",
  content: [
    "./src/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

