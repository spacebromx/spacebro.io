/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      teal: {
        900: '#07EDF8',
        600: '#03EDF9',
      },
      pink: {
        900: '#FC2EB1',
        700: '#FD4AAB',
        500: '#FF7EDB',
        300: '#FF7EDB',
      },
      yellow: {
        900: '#FEDE5D',
        300: '#FEFB5B',
      },
      purple: {
        900: '#281D37',
        800: '#302441',
      },
      gray: {
        900: '#181523',
        800: '#40344F',
        700: '#DDDDDD',
        600: '#B4B4B4',
        500: '#B5B5B5',
        300: '#372B47',
      },
      orange: {
        900: '#FE4450',
        500: '#F97E72',
      },
      green: {
        900: '#64DBA5',
        500: '#72F1B8',
      },
      white: '#fff',
      transparent: 'transparent',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      fontFamily: {
        sf: ['SF Pro Display', 'Arial', 'sans-serif'],
      },
    },
    variants: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
