  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     theme: {
       extend: {
        colors: {
          'custom-gradient': 'linear-gradient(135deg, #230063 0%, #8c49ff 50%, #330a7f 100%);',
            },
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }