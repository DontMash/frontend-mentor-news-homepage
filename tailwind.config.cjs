/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        paragraph: '0.9375rem',
      },
    },
    colors: {
      "soft-orange": "#e9ab53",
      "soft-red": "#f15e50",

      "off-white": "#fffdfa",
      "grayish-blue": "#c5c6ce",
      "dark-grayish-blue": "#5d5f79",
      "very-dark-blue": "#00001a",
    },
    fontFamily: {
      "inter": ['Inter', 'sans-serif'],
      "inter-variable": ['Inter Variable', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      xl: '1440px' 
    }
  },
  plugins: [],
};
