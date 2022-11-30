/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryPurple: "#8a6ce3",
      primaryPurplehover: "#9378E5",
      whiteHover: "#DBDBDB",
      secondaryblue: "#0F9AFB",
      darkgray: "#3D3D3D",
      medgray: "#666666",
      black: "#000000",
      white: "#ffffff",
      textWhitePrimary: "#eeeeee",
      textWhiteSecondary: "#9c9c9c",
      likeRed: "#d2146c",
      commentBlue: "#8a6ce3",
      repostGreen: "#00ba7c"
    },
    extend: {
      fontFamily: {
        Belleza: ["Belleza", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        login : "url('/public/static/The-Encounter.jpg')"
      }
    },
  },
  plugins: [],
};