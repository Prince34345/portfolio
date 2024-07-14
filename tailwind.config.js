/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Zilla: ['Zilla Slab', 'serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        Titillium: ['Titillium Web', 'sans-serif'],
        Playfair: ['Playfair Display SC', 'serif'],
        Quantico: ['Quantico', 'sans-serif']
      }
    },
  },
  plugins: [],
}

