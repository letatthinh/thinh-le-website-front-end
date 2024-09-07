const shared = {
  accentColor: 'text-dark-blue'
}

const white = {
  id: 0,
  hover: {
    primaryColor: 'hover:text-white',
    secondaryColor: 'hover:text-black',
    accentColor: 'hover:text-dark-blue'
  },
  primaryColor: 'text-white',
  secondaryColor: 'text-black',
  ...shared
}

const black = {
  id: 1,
  hover: {
    primaryColor: 'hover:text-black',
    secondaryColor: 'hover:text-white',
    accentColor: 'hover:text-dark-blue'
  },
  primaryColor: 'text-black',
  secondaryColor: 'text-white',
  ...shared
}

const textThemeConstant = {
  white,
  black
}

export default textThemeConstant
