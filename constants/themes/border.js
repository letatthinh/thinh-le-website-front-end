const white = {
  id: 0,
  after: {
    accentColor800: 'after:border-white-accent-color-800'
  },
  before: {
    accentColor800: 'before:border-white-accent-color-800',
    top: {
      secondaryColor: 'before:border-t-black'
    }
  },
  hover: {
    accentColor800: 'hover:border-white-accent-color-800'
  },
  primaryColor: 'border-white',
  secondaryColor: 'border-black',
  secondaryColor300: 'border-gray-300',
  accentColor800: 'border-white-accent-color-800',
  opacity: {
    ten: {
      secondaryColor: 'border-black/10'
    }
  }
}

const black = {
  id: 1,
  after: {
    accentColor800: 'after:border-black-accent-color-800'
  },
  before: {
    accentColor800: 'before:border-black-accent-color-800'
  },
  hover: {
    accentColor800: 'hover:border-black-accent-color-800'
  },
  primaryColor: 'border-black',
  secondaryColor: 'border-white',
  secondaryColor300: 'border-gray-300', // [Debt]
  accentColor800: 'border-black-accent-color-800',
  opacity: {
    ten: {
      secondaryColor: 'border-white/10'
    }
  }
}

const borderThemeConstant = {
  white,
  black
}

export default borderThemeConstant
