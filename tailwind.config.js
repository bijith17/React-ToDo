/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        todoBg:"#ff99d1",
        Bg1:"#FFC4E1",
        Bg2:"#EED7CE",
        btnHover:"#EAEAEA",
        txtColor:"#252525",
        
      }
      
    },
  },
  plugins: [],
}

