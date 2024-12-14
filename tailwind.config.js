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
      'white-accent-color-300': '#cbd5e1',
      'white-accent-color-800': '#9f1239',
      'black-accent-color-300': '#e2e8f0',
      'black-accent-color-800': '#450a0a'
    },
    flexBasis: {
      '3/10': '30%',
      '7/10': '70%'
    },
    gap: {
      '18': '4.5rem',
      '30': '7.5rem'
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
