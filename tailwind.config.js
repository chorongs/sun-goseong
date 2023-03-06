/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#f76d02',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpeg')`,
      },
    },
  },
  plugins: [],
};
