/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem', 
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '8rem', 
      },
    },
    extend: {
      colors: {
        fontColor: '#EFA765', 
        bgColor: "#232533",
      },
    },
  },
  plugins: [],
}
