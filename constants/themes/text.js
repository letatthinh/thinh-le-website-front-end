const shared = {
  accentColor: 'text-blue-800'
}

const white = {
  id: 0,
  hover: {
    primaryColor: 'hover:text-white',
    secondaryColor: 'hover:text-black',
    accentColor: 'hover:text-blue-800'
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
    accentColor: 'hover:text-blue-800'
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
