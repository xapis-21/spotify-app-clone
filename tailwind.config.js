/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-green": "#4CAF50",
        "app-dark": "#0F0F0F",
      },
    },
    fontFamily: {
      gotham: ["GothamRegular", "GothamBold", "sans-serif"],
    },
  },
  plugins: [],
};
