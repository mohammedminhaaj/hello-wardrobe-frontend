/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-cadet': '#22223b', 
        'independence': '#4a4e69', 
        'h-gray': '#9a8c98', 
        'silver-pink': '#c9ada7', 
        'isabelline': '#F2E9E4', 
      },
    },
  },
  plugins: [],
}
