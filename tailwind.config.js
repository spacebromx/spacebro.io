module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
