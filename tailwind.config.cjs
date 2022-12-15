/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    container: {
      center: true,
    },


    fontFamily: {
      Fredoka: ['"Fredoka One","sans-serif"'],
      Ubuntu: ['"Ubuntu Condensed","sans-serif"']
    },
  
    extend: {},
  },
  plugins: [],
}
