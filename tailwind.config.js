/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'wildscreen': { 'raw': '(min-aspect-ration: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ration: 13/20)' },
      },
      Keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}