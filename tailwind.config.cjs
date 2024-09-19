/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    container: {
      padding: '8rem',
    },
    extend: {
      colors: {
        fontColor: '#EFA765', // Hex code for the color
      },
    },
  },
  plugins: [],
}
