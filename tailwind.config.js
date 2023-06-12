/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#17A398",
        secundary:"#D85D5D",
        hover: "#1BDDCD"
      }
    },
  },
  plugins: [],
}

