/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pine": "#136F63",
        "cream": "#937B63",
        "snow": "#FFFBFA",
        "richblack": "#051014",
        "licorice": "#22181C",
        "offwhite": "#F0EAD2",
        "teagreen": "#DDE5B6",
        "leafgreen": "#ADC178",
        "mud": "#A98467",
        "wood": "#6C584C"
      }
    },
  },
  plugins: [],
}

