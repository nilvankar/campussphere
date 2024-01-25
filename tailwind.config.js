/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./src/component/**/*.jsx",
   
  ],
  theme: {
    extend: {
      height:{
        '312.6':'50rem',
        '165vh':'1031rem',
        '265':'160rem',
        '183':'114rem'
      }
    },
  },
  plugins: [],
}

