/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-cadet': {
          100: '#414171',
          200: '#2f2f51',
          300: '#22223b',
        }, 
        'independence': {
          100: '#5f6487',
          200: '#4a4e69',
          300: '#35384b',
        }, 
        'h-gray': {
          100: '#9a8c98',
          200: '#7a6b78',
          300: '#5f535d',
        }, 
        'silver-pink': {
          100: '#c9ada7',
          200: '#bb9890',
          300: '#a87a71',
        }, 
        'isabelline': {
          100: '#F2E9E4',
          200: '#e6d5cb',
          300: '#d6b9a9',
        }, 
      },
    },
  },
  plugins: [],
}
