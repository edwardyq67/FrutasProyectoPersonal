/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#de2c4d",
        secondary:"#fb923c"
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
        averia:["Averia Serif Libre","serif"],
      },
      container: {
        center:true,
        padding:{
          
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}

