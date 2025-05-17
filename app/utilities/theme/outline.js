import outlineThemeConstant from '@constants/themes/outline.js'

const getById = (_id) => {
  return _id === outlineThemeConstant.white.id
    ? outlineThemeConstant.white
    : outlineThemeConstant.black
}

const outlineThemeUtility = {
  getById
}

export default outlineThemeUtility
