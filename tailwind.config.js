/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      height: {
        '95': '30rem',   // Custom height
        '128': '32rem',   // Custom height
        '144': '36rem',   // Custom height
        'screen-80': '80vh' // Custom height based on viewport height
      },
   
    },
  },
  plugins: [],
}

