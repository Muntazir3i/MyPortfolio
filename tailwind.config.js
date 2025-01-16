/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'custom-height': '90%'
      },
      width:{
        'custom-width': '95%'
      },
      backgroundImage: {
        'diagonal-lines': "linear-gradient(to right, #262626, #222222, #1e1e1e, #1b1b1b, #171717)"
      },
      textShadow:{
        'my-shadowd':'text-shadow: rgba(247,5,5,0.76) 0px 0px 89px; '
      },
      fontFamily:{
        sourcecode:["Source Code Pro", 'serif'],
        opensans:[ "Open Sans", 'serif']
      }
    },
    darkMode:'class'
  },
  plugins: [],
}

