

export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1929',
          900: '#050d18',
          800: '#0a1929',
          700: '#0e2438',
          600: '#15324d',
        },
        brand: {
          DEFAULT: '#ee5a2a',
          50: '#fef3ed',
          100: '#fde0ce',
          200: '#fbc09c',
          300: '#f89a64',
          400: '#f47438',
          500: '#ee5a2a',
          600: '#d8451a',
          700: '#b13518',
          800: '#8e2c1a',
          900: '#742719',
        },
      },
      fontFamily: {
        sans: ['Lexend', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
    },
  },
}

