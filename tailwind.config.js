const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: {
        light: '#343942',
        DEFAULT: '#0d1117'
      },
      light: {
        light: '#fafafa',
        DEFAULT: '#c9d1d9'
      },
      primary: {
        DEFAULT: '#238636'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
