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
      primaryred: "#940025",
      primaryredhover: "#800020",
      secondaryblue: "#0F9AFB",
      darkgray: "#2e2e2e",
      medgray: "#666666",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        Belleza: ["Belleza", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
