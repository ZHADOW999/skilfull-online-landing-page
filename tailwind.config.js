/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./main/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-image":"url(/images/hero-image-light-bulb.png)"
      },

      fontFamily:{
        'body':  'Josefin Sans, Helvetica'
      },

      colors:{
        'body-color':'#f9fafb'
      },

      screens:{
        'sm': '480px',
        'md': '768px',
        '2md':'870px',
        'lg': '976px',
        'xl': '1024px',
        '2xl':'1250px',
        '3xl':'1440px',
      },

      boxShadow:{
        '3xl':'0px 100px 400px 100px hsl(0, 0%, 0%, 0.6)'
      },
      
      fontSize:{
        'smaller':'0.7rem',
        1: '0.8rem',
        1.5:'0.9rem',
        2: '1rem',
        3: '1.125rem',
        4: '1.5rem',
        5: '2rem',
        6: '2.5rem',
        7:  '3rem',
        8: '3.5rem',

      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}