/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        xs: '400',
      },
      width: {
        minicart: '450px',
        swiper: '414px',
        'swiper-min': '300px',
        'admin-sidebar': '200px',
      },
      height: {
        header: '6rem',
        minicart: '450px',
        swiper: '414px',
        'swiper-min': '300px',
        'admin-navbar': '80px',
      },
      padding: {
        'admin-sidebar': '200px',
        'admin-navbar': '80px',
      },
      colors: {
        primary: {
          900: '#073135',
          800: '#0b4d53',
          700: '#0f6971',
          600: '#13858f',
          500: '#17a0ad',
          400: '#1bbccb',
          300: '#26d2e2',
          200: '#44d8e6',
          100: '#62dfea',
        },
        danger: {
          900: '#e22626',
          800: '#e43535',
          700: '#e64444',
          600: '#e85353',
          500: '#ea6262',
          400: '#ec7171',
          300: '#ee8080',
          200: '#f08f8f',
          100: '#f29e9e',
        },
        warning: {
          900: '#ffcd69',
          800: '#ffd176',
          700: '#ffd684',
          600: '#ffda92',
          500: '#ffdf9f',
          400: '#ffe4ad',
          300: '#ffe8bb',
          200: '#ffedc8',
          100: '#fff1d6',
        },
        info: {
          900: '#006bdd',
          800: '#1184ff',
          700: '#228dff',
          600: '#3395ff',
          500: '#449eff',
          400: '#55a7ff',
          300: '#66b0ff',
          200: '#77b9ff',
          100: '#88c1ff',
        },
        dark: {
          900: '#000000',
          800: '#191919',
          700: '#333238',
          600: '#4C4C4C',
          500: '#737278',
        },
        gray: '#e5e5e5',
        light: '#f5f5f5f5',
      },
      gridTemplateColumns: {
        products: 'minmax(250px, 1fr) auto',
      },
      animation: {
        drop: 'drop .4s ease-out',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
