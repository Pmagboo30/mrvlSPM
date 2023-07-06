/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald"],
        montserrat: ["montserrat"],
      },
      colors: {
        custblack: ["#202020"],
        custred: ["#F11E22"],
        gblue: ["#3CAEA3"],
        yellow: ["#F6D55C"],
        red: [],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
