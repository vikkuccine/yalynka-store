/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./src/**/*.{html,js,scss}",
            "./node_modules/tw-elements/dist/js/**/*.js"
          ],
  theme: {
    extend: {
      colors: {
        primary: '#588A3D',
        hover: '#8bbf6f',
        text: '#333333',
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}

