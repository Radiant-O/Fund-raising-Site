/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      sm:'375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        "ModerateCyan": "hsl(176, 50%, 47%)",
        "DarkCyan": "hsl(176, 72%, 28%)",
        "Darkgray": "hsl(0, 0%, 48%)",
        "myBlack": "hsl(0,0%,0%)"
      },
    },
  },
  plugins: [],
}