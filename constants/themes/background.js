const white = {
  id: 0,
  after: {
    primaryColor: 'after:bg-white',
    secondaryColor: 'after:bg-black'
  },
  before: {
    primaryColor: 'before:bg-white',
    secondaryColor: 'before:bg-black'
  },
  hover: {
    accentColor800: 'hover:bg-white-accent-color-800',
    secondaryColor: 'hover:bg-black'
  },
  opacity: {
    fifty: {
      secondaryColor: 'bg-black/50'
    },
    ninety: {
      primaryColor: 'bg-white/90'
    }
  },
  primaryColor: 'bg-white',
  secondaryColor: 'bg-black',
  secondaryColor100: 'bg-gray-100',
  accentColor300: 'bg-white-accent-color-300',
  accentColor800: 'bg-white-accent-color-800'
}

const black = {
  id: 1,
  after: {
    primaryColor: 'after:bg-black',
    secondaryColor: 'after:bg-white'
  },
  before: {
    primaryColor: 'before:bg-black',
    secondaryColor: 'before:bg-white'
  },
  hover: {
    accentColor800: 'hover:bg-black-accent-color-800',
    secondaryColor: 'hover:bg-white'
  },
  opacity: {
    fifty: {
      secondaryColor: 'bg-white/50'
    },
    ninety: {
      primaryColor: 'bg-black/90'
    }
  },
  primaryColor: 'bg-black',
  secondaryColor: 'bg-white',
  secondaryColor100: 'bg-gray-100', // [Debt]
  accentColor300: 'bg-black-accent-color-300',
  accentColor800: 'bg-black-accent-color-800'
}

const backgroundThemeConstant = {
  white,
  black
}

export default backgroundThemeConstant
