/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./Icon/img-font-garden.jpg')"
      },
      heightImage:{
        'h-vh-50':{
          height:50
        }
      }
    },
  },
  plugins: [],
}

