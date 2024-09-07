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
    colors: {
      'dark-blue': '#2E2EFF'
    },
    transitionProperty: {
      'box-shadow': 'box-shadow',
      'font-size': 'font-size',
      'max-width': 'max-width',
      'padding': 'padding',
      'text': 'font-size'
    },
    animation: {
      hamburger: 'hamburger 300ms ease-in-out infinite'
    },
    keyframes: {
      hamburger: {
        '0%, 100%': {transform: 'scale(1)'},
        '50%': {transform: 'scale(1.25, 0.75)'}
      }
    },
    screens: {
      'xs': '480px'
    },
    padding: {
      '18': '4.5rem',
      '30': '7.5rem'
    },
    maxWidth: {
      'screen-xs': '480px'
    }
  }
}

export const plugins = []
