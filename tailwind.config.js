/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ['"Alegreya Sans SC"', "sans-serif"],
        gistesy: ["Gistesy", "cursive"],
        john: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "custom-red": "#c30025",
      },
    },
  },
  plugins: [],
}

