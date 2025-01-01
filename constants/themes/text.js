const white = {
  id: 0,
  hover: {
    primaryColor: 'hover:text-white',
    secondaryColor: 'hover:text-black',
    accentColor800: 'hover:text-white-accent-color-800'
  },
  primaryColor: 'text-white',
  secondaryColor: 'text-black',
  secondaryColor600: 'text-gray-600',
  accentColor800: 'text-white-accent-color-800',
  group: {
    data: {
      selected: {
        primaryColor: 'group-data-[selected]:text-white'
      }
    }
  },
  data: {
    focus: {
      primaryColor: 'data-[focus]:text-white'
    }
  },
  invalid: 'text-red-600'
}

const black = {
  id: 1,
  hover: {
    primaryColor: 'hover:text-black',
    secondaryColor: 'hover:text-white',
    accentColor800: 'hover:text-black-accent-color-800'
  },
  primaryColor: 'text-black',
  secondaryColor: 'text-white',
  secondaryColor600: 'text-gray-600', // [Debt]
  accentColor800: 'text-black-accent-color-800',
  group: {
    data: {
      selected: {
        primaryColor: 'group-data-[selected]:text-black'
      }
    }
  },
  data: {
    focus: {
      accentColor800: 'data-[focus]:text-black'
    }
  },
  invalid: 'text-red-600'
}

const textThemeConstant = {
  white,
  black
}

export default textThemeConstant
