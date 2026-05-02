/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red:   { DEFAULT: "#C0202E", dark: "#8B1520" },
        navy:  { DEFAULT: "#0D1B2A", mid: "#162437"  },
        green: { DEFAULT: "#2D6A4F", light: "#40916C"},
        gold:  "#C8A96A",
        cream: "#F8F4EF",
      },
      fontFamily: {
        display:   ["'Barlow Condensed'", "sans-serif"],
        arabic:    ["'Noto Kufi Arabic'", "sans-serif"],
        body:      ["'Cairo'", "sans-serif"],
      },
      transitionDuration: { 400: "400ms" },
    },
  },
  plugins: [],
};
