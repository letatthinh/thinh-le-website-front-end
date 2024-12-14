import ThemeStateType from '../types/theme-state'

const whiteThemeState: ThemeStateType = {
  after: {
    background: {
      primaryColor: 'after:bg-white',
      secondaryColor: 'after:bg-black'
    }
  },
  before: {
    background: {
      primaryColor: 'before:bg-white',
      secondaryColor: 'before:bg-black'
    }
  },
  background: {
    primaryColor: 'bg-white',
    secondaryColor: 'bg-black'
  },
  border: {
    accentColor800: 'border-red-500'
  },
  hover: {
    background: {
      accentColor800: 'hover:bg-red-500'
    },
    text: {
      primaryColor: 'text-white'
    }
  },
  text: {
    secondaryColor: 'text-black',
    accentColor800: 'text-red-500'
  }
}

const blackThemeState: ThemeStateType = {
  after: {
    background: {
      primaryColor: 'after:bg-black',
      secondaryColor: 'after:bg-white'
    }
  },
  before: {
    background: {
      primaryColor: 'before:bg-black',
      secondaryColor: 'before:bg-white'
    }
  },
  background: {
    primaryColor: 'bg-black',
    secondaryColor: 'bg-white'
  },
  border: {
    accentColor800: 'border-red-500'
  },
  hover: {
    background: {
      accentColor800: 'hover:bg-red-500'
    },
    text: {
      primaryColor: 'text-black'
    }
  },
  text: {
    secondaryColor: 'text-white',
    accentColor800: 'text-red-500'
  }
}

const themeConstant = {
  whiteThemeState,
  blackThemeState
}

export default themeConstant
