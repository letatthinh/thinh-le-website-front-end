const white = {
  id: 0,
  focus: {
    accentColor700: 'focus:outline-white-accent-color-700'
  },
  has: {
    input: {
      focusWithin: {
        accentColor700: 'has-[input:focus-within]:outline-white-accent-color-700'
      },
      invalid: 'has-[input:invalid]:outline-red-600'
    }
  },
  secondaryColor300: 'outline-gray-300',
  invalid: 'invalid:outline-red-600'
}

const black = {
  id: 1,
  has: {
    input: {
      focusWithin: {
        accentColor700: 'has-[input:focus-within]:outline-white-accent-color-700'
      }
    }
  },
  secondaryColor300: 'outline-gray-300', // [Debt]
  invalid: 'invalid:outline-red-600'
}

const outlineThemeConstant = {
  white,
  black
}

export default outlineThemeConstant
