/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html' // add your html file here
  ],
  theme: {
    container: {
      padding: '1.4rem',
    },
    extend: {
      spacing: {'quarter': '25%',},
      
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-ligth': 'rgb(0,105,255)',
        'do-blue-medium': 'rgb(0,125,255)',
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': "'Cascadia Code', monospace",
      },
    },
  },
  plugins: [],
}