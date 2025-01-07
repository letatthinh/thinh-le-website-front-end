const white = {
  id: 0,
  focus: {
    input: {
      accentColor800: 'focus:outline-white-accent-color-800'
    }
  },
  hasFocusWithin: {
    input: {
      accentColor800: 'has-[input:focus-within]:outline-white-accent-color-800'
    }
  },
  secondaryColor300: 'outline-gray-300',
  invalid: 'invalid:outline-red-600'
}

const black = {
  id: 1,
  hasFocusWithin: {
    input: {
      accentColor800: '?' // [Debt]
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
