/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'gray-light': '#f8f8f8',
        'gray': '#424242',
        'black-medium': '#232323',
        'red-main': '#E70000'
      },
      zIndex: {
        '1': '1',
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      custom: '.15em',
    }
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       // colors: {
//       //   'light-gray': '#D1DADD',
//       //   'gray': '#878B8F',
//       //   'dark-gray': '#00000080',
//       //   'light-yellow': '#D2E051',
//       //   'green': '#8BC34A',
//       //   'dark-green': '#2C3C44',
//       //   'yellow': '#D2E051',
//       //   'red': '#E7344C'
//       // },
//       // boxShadow: {
//       //   'light': '2px 2px 5px 0px rgba(0, 0, 0, 0.37)',
//       //   'middle': '2px 2px 5px 2px rgba(0, 0, 0, 0.37)',
//       //   'sidebar': '0px 18px 17px 2px rgba(0, 0, 0, 0.37)',
//       //   'header': '0px -5px 59px -10px rgba(0, 0, 0, 0.37)',
//       //   'filter': 'inset -3px 7px 18px -8px rgba(0, 0, 0, 0.2)',
//       //   'filter-hover': 'inset -6px 7px 33px -8px rgba(0, 0, 0, 0.2)'
//       // },
//     },
//   },
//   // plugins: [
//   //   plugin(function({ addBase, theme }) {
//   //     addBase({
//   //       'h1': { fontSize: theme('fontSize.2xl') },
//   //       'h2': { fontSize: theme('fontSize.xl')},
//   //       'h3': { fontSize: theme('fontSize.lg') },
//   //     })
//   //   })
//   // ],
// }

