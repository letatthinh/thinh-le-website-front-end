import fillThemeConstant from '@/constants/themes/fill'

const getById = (_id) => {
  return _id === fillThemeConstant.white.id
    ? fillThemeConstant.white
    : fillThemeConstant.black
}

const fillThemeUtility = {
  getById
}

export default fillThemeUtility
