
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        red: colors.red,
        yellow: colors.amber,
        pink: colors.fuchsia,
      },
      fontFamily: {
        mel: ["melkia"],
      },
    },
  },
  plugins: [],
}