/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    // colors:{
    //   'orange': '#ffa500'
    // },
    extend: {
      colors:{
        'orange': '#ffa500',
        'bleu-nuit':{
          700: '#0077b6',
          800: '#023e8a',
          900: '#03045e'
        }
      },
      fontSize:{
        'custom':'66px',
        "clamp-sm": "clamp(20px, 3vw, 50px)"
      },
      fontFamily:{
        "devonshire":'devonshire'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
