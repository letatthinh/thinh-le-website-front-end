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
    accentColor: 'hover:bg-white-accent-color',
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
  accentColor: 'bg-white-accent-color'
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
    accentColor: 'hover:bg-black-accent-color',
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
  accentColor: 'bg-black-accent-color'
}

const backgroundThemeConstant = {
  white,
  black
}

export default backgroundThemeConstant
