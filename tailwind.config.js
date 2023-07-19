/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-page': "url('/src/imsges/login.jpg')",
      }
    },
  },
  plugins: [],
}

