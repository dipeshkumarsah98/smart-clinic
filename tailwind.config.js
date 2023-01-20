/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        patrick: ["Patrick Hand", "cursive"],
        "major-mono": ["'Major Mono Display'", "monospace"],
        nunito: ["'Nunito'", "sans-serif"],
        "merienda ": ["'Merienda One'", "sans-serif"],
        "raleway  ": ["'Raleway'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
