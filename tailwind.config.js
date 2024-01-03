export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '600': {'max': '615px'},
      'xs': {'max': '350px'}
    },
    extend: {
      colors: {
        custom1: 'hsl(217, 16%, 45%)',
        custom2: 'hsl(229, 25%, 31%)',
        custom3: 'hsl(229, 64%, 46%)'
      }
    }
  },
  plugins: [],
}