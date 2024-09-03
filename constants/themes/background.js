const shared = {
  accentColor: 'bg-sky-400'
}

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
    accentColor: 'hover:bg-sky-400',
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
  ...shared
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
    accentColor: 'hover:bg-sky-400',
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
  ...shared
}

const backgroundThemeConstant = {
  white,
  black
}

export default backgroundThemeConstant
