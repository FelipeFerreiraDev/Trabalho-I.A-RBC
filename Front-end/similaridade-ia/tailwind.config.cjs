/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          300: '#00B37E',
          400: '#44913a',
          500: '#00875F',
          700: '#015F43',
          800: '#008F38',
          brasao: '#3e8e41',
          brasao2: '#0f8239',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          200: '#FF690F',
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#f0f0f3',
          150: '#Ececec',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#4d4c59',
          500: '#323238',
          550: '#333333',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
    },
  },
  plugins: [],
}