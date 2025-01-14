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
    accentColor700: 'hover:bg-white-accent-color-700',
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
  secondaryColor200: 'bg-gray-200',
  secondaryColor300: 'bg-gray-300',
  accentColor100: 'bg-white-accent-color-100',
  accentColor700: 'bg-white-accent-color-700',
  data: {
    focus: {
      accentColor700: 'data-[focus]:bg-white-accent-color-700'
    }
  }
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
    accentColor700: 'hover:bg-black-accent-color-700',
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
  secondaryColor200: 'bg-gray-100', // [Debt]
  secondaryColor300: 'bg-gray-300', // [Debt]
  accentColor100: 'bg-black-accent-color-100',
  accentColor700: 'bg-black-accent-color-700',
  data: {
    focus: {
      accentColor700: 'data-[focus]:bg-black-accent-color-700'
    }
  }
}

const backgroundThemeConstant = {
  white,
  black
}

export default backgroundThemeConstant
