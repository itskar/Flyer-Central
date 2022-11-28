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
      primaryPurplehover: "#535d7c",
      secondaryblue: "#0F9AFB",
      darkgray: "#2e2e2e",
      medgray: "#666666",
      black: "#000000",
      white: "#ffffff",
      textWhitePrimary: "#eeeeee",
      textWhiteSecondary: "#9c9c9c",
      likeRed: "#d2146c",
      commentBlue: "#1d9bf0",
      repostGreen: "#00ba7c"
    },
    extend: {
      fontFamily: {
        Belleza: ["Belleza", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
