/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {

    colors: {
      "dark": "#000050",
      "accent":"#54FFF5",
      "grey":"#D9DBE4",
      "white" : "#ffffff",
      "error" : "#FF5473"
    },
    extend: {},
  },
  plugins: [],
}
