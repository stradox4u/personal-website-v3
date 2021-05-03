module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{vue, js, ts, jsx, tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'gradient-image': "url('../../assets/colorBackground.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
