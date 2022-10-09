/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: '0 5px 10px rgb(0 0 0 / 10%)'
      }
    }
  },
  plugins: []
}
