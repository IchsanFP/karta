/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        rose: {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde58a',
        '300': '#fbd24e',
        '400': '#fabe25',
        '500': '#f49d0c',
        '600': '#d87607',
        '700': '#bc560a',
        '800': '#923f0e',
        '900': '#78340f',
        '950': '#451a03',
    },
    
      },
      fontFamily:{
        poppins : [ "Poppins" , "sans-serif" ],
        monst : ["Montserrat Alternates" ],
      },
      screens: {
        '2xl': '1320px',  
      },
    },
  },
  plugins: [],
}
