/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        secondary: "#05422C",
        primary: "#17AF26",
        "neutral-400": "#F4F4F4",
      },

      backgroundSize: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
