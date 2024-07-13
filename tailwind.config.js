/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#780000',
        secondary: '#c1121f',
        tertiary: '#669bbc',
        light: '#fdf0d5',
        dark: '#003049',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

