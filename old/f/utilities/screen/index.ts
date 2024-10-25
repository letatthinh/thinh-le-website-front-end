import screenWidthConstant from '@/constants/screen-width'

const isScreenWidthFrom2Xl = (_screenWidth: number) => {
  return _screenWidth >= screenWidthConstant._2xl
}

const isScreenWidthFromXlAndSmallerThan2Xl = (_screenWidth: number) => {
  return screenWidthConstant.xl <= _screenWidth
    && _screenWidth < screenWidthConstant._2xl
}

const isScreenWidthFromXl = (_screenWidth: number) => {
  return _screenWidth >= screenWidthConstant.xl
}

const isScreenWidthFromLgAndSmallerThanXl = (_screenWidth: number) => {
  return screenWidthConstant.lg <= _screenWidth
    && _screenWidth < screenWidthConstant.xl
}

const isScreenWidthFromLg = (_screenWidth: number) => {
  return _screenWidth >= screenWidthConstant.lg
}

const isScreenWidthFromMdAndSmallerThanLg = (_screenWidth: number) => {
  return screenWidthConstant.md <= _screenWidth
    && _screenWidth < screenWidthConstant.lg
}

const isScreenWidthFromMd = (_screenWidth: number) => {
  return _screenWidth >= screenWidthConstant.md
}

const isScreenWidthFromSmAndSmallerThanMd = (_screenWidth: number) => {
  return screenWidthConstant.sm <= _screenWidth
    && _screenWidth < screenWidthConstant.md
}

const isScreenWidthFromSm = (_screenWidth: number) => {
  return _screenWidth >= screenWidthConstant.sm
}

const isScreenWidthFrom0AndSmallerThanSm = (_screenWidth: number) => {
  return 0 <= _screenWidth
    && _screenWidth < screenWidthConstant.sm
}

const is2XlBreakpoint = (_screenWidth: number) => {
  return _screenWidth === screenWidthConstant._2xl
}

const isXlBreakpoint = (_screenWidth: number) => {
  return _screenWidth === screenWidthConstant.xl
}

const isLgBreakpoint = (_screenWidth: number) => {
  return _screenWidth === screenWidthConstant.lg
}

const isMdBreakpoint = (_screenWidth: number) => {
  return _screenWidth === screenWidthConstant.md
}

const isSmBreakpoint = (_screenWidth: number) => {
  return _screenWidth === screenWidthConstant.sm
}

const getScreenBreakpoint = (
  _screenWidth: number
): number => {
  if (screenUtility.isScreenWidthFrom2Xl(_screenWidth)) {
    return screenWidthConstant._2xl
  }
  if (screenUtility.isScreenWidthFromXlAndSmallerThan2Xl(_screenWidth)) {
    return screenWidthConstant.xl
  }
  if (screenUtility.isScreenWidthFromLgAndSmallerThanXl(_screenWidth)) {
    return screenWidthConstant.lg
  }
  if (screenUtility.isScreenWidthFromMdAndSmallerThanLg(_screenWidth)) {
    return screenWidthConstant.md
  }
  if (screenUtility.isScreenWidthFromSmAndSmallerThanMd(_screenWidth)) {
    return screenWidthConstant.sm
  }

  return 0
}

const screenUtility = {
  isScreenWidthFrom2Xl,
  isScreenWidthFromXlAndSmallerThan2Xl,
  isScreenWidthFromXl,
  isScreenWidthFromLgAndSmallerThanXl,
  isScreenWidthFromLg,
  isScreenWidthFromMdAndSmallerThanLg,
  isScreenWidthFromMd,
  isScreenWidthFromSmAndSmallerThanMd,
  isScreenWidthFromSm,
  isScreenWidthFrom0AndSmallerThanSm,
  is2XlBreakpoint,
  isXlBreakpoint,
  isLgBreakpoint,
  isMdBreakpoint,
  isSmBreakpoint,
  getScreenBreakpoint
}

export default screenUtility