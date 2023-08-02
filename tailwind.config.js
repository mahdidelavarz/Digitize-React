/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-page': "url('/src/images/login.jpg')",
      },
      boxShadow: {
        'sdt': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
      }
    },
  },
  plugins: [],
}

