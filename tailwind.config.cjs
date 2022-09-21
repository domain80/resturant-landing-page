/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    fontFamily: {
      'sans': ['"Roboto"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background': "url('/images/background.png')", 
      }
    }
  },
  plugins: [],
}
