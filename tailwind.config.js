/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js, jsx}',
  './components/**/*.{js, jsx}',
  './constants/themes/**/*.{js, jsx}',
  './hooks/**/*.{js, jsx}',
  './utilities/class-name/**/*.{js, jsx}'
]

export const theme = {
  extend: {
    animation: {
      hamburger: 'hamburger 300ms ease-in-out infinite'
    },
    colors: {
      'white-accent-color': '#9d174d',
      'black-accent-color': '#450a0a'
    },
    flexBasis: {
      '7/10': '70%'
    },
    keyframes: {
      hamburger: {
        '0%, 100%': {transform: 'scale(1)'},
        '50%': {transform: 'scale(1.25, 0.75)'}
      }
    },
    maxWidth: {
      'screen-xs': '480px'
    },
    padding: {
      '18': '4.5rem',
      '30': '7.5rem'
    },
    screens: {
      'xs': '480px'
    },
    transitionProperty: {
      'box-shadow': 'box-shadow',
      'font-size': 'font-size',
      'max-width': 'max-width',
      'padding': 'padding',
      'text': 'font-size'
    }
  }
}

export const plugins = []
