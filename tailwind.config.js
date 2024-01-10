/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'white-dirty': '#e6e6e6',
        'gray-light': '#f8f8f8',
        'gray': '#424242',
        'black-medium': '#232323',
        'red-main': '#E70000',
      },
      zIndex: {
        '1': '1',
      },
      animation: {
        'move-outlines': 'draw 2s linear forwards',
        'hide-text': 'hidetext .8s linear forwards 1s',
        'move-arrow': 'dash 8s linear infinite',
        'fade-inup': 'fadeInUp 1s;',
        'fade-inup-d2': 'fadeInUp 1s .2s;',
        'fade-inup-d3': 'fadeInUp 1s .3s;',

      },
      keyframes: {
        hidetext: {
          '100%': { fill: '#f3f3f3', stroke: 'transparent' }
        },
        draw: {
          '100%': {strokeDashoffset: '0'}
        },
        dash: {
          '0%': { strokeDashoffset: "200"},
          '100%': { strokeDashoffset: "0"}
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0,100%,0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0,0,0)'
          }
        }
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
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '991px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}