module.exports = {
  purge: [
    // './src/**/*.html',
    // './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      backgroundImage: theme => ({
        'gradient-image': "url('../assets/colorBackground.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
