import borderThemeConstant from '@constants/themes/border.js'

const getById = (_id) => {
  return _id === borderThemeConstant.white.id
    ? borderThemeConstant.white
    : borderThemeConstant.black
}

const borderThemeUtility = {
  getById
}

export default borderThemeUtility
