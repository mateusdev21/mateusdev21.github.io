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
        primary: '#3d5a80',
        secondary: '#98c1d9',
        tertiary: '#ee6c4d',
        light: '#e0fbfc',
        dark: '#293241',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

