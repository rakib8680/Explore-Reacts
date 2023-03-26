/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#efa78f",

          "secondary": "#83ff7c",

          "accent": "#afd7ff",

          "neutral": "#1D192A",

          "base-100": "#E6EDF4",

          "info": "#2FACF4",

          "success": "#138B4D",

          "warning": "#EFBB6B",

          "error": "#FA617D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} 