import screenUtility from '@/utilities/screen'

const getNumberOfGridItemsByScreenBreakpointAndSixColumns = (
  _screenWidthBreakpoint: number
): number => {
  if (screenUtility.isScreenWidthFrom2Xl(_screenWidthBreakpoint)) {
    return 6
  }
  if (screenUtility.isXlBreakpoint(_screenWidthBreakpoint)) {
    return 5
  }
  if (screenUtility.isLgBreakpoint(_screenWidthBreakpoint)) {
    return 4
  }
  if (screenUtility.isMdBreakpoint(_screenWidthBreakpoint)) {
    return 3
  }
  if (screenUtility.isSmBreakpoint(_screenWidthBreakpoint)) {
    return 2
  }

  return 1
}

const getNumberOfGridItemsByScreenBreakpointAndFiveColumns = (
  _screenWidthBreakpoint: number
): number => {
  if (screenUtility.isScreenWidthFromXl(_screenWidthBreakpoint)) {
    return 5
  }
  if (screenUtility.isLgBreakpoint(_screenWidthBreakpoint)) {
    return 4
  }
  if (screenUtility.isMdBreakpoint(_screenWidthBreakpoint)) {
    return 3
  }
  if (screenUtility.isSmBreakpoint(_screenWidthBreakpoint)) {
    return 2
  }

  return 1
}

const getNumberOfGridItemsByScreenBreakpointAndFourColumns = (
  _screenWidthBreakpoint: number
): number => {
  if (screenUtility.isScreenWidthFromLg(_screenWidthBreakpoint)) {
    return 4
  }
  if (screenUtility.isMdBreakpoint(_screenWidthBreakpoint)) {
    return 3
  }
  if (screenUtility.isSmBreakpoint(_screenWidthBreakpoint)) {
    return 2
  }

  return 1
}

const getNumberOfGridItemsByScreenBreakpointAndThreeColumns = (
  _screenWidthBreakpoint: number
): number => {
  if (screenUtility.isScreenWidthFromMd(_screenWidthBreakpoint)) {
    return 3
  }
  if (screenUtility.isSmBreakpoint(_screenWidthBreakpoint)) {
    return 2
  }

  return 1
}

const getNumberOfGridItemsByScreenBreakpointAndTwoColumns = (
  _screenWidthBreakpoint: number
): number => {
  if (screenUtility.isScreenWidthFromSm(_screenWidthBreakpoint)) {
    return 2
  }

  return 1
}

const calculateNumberOfGridColumnsByScreenWidthBreakpoint = (
  _screenWidthBreakpoint: number,
  _predefinedNumberOfColumns: number
): number => {
  switch (_predefinedNumberOfColumns) {
    case 6:
      return getNumberOfGridItemsByScreenBreakpointAndSixColumns(
        _screenWidthBreakpoint
      )
    case 5:
      return getNumberOfGridItemsByScreenBreakpointAndFiveColumns(
        _screenWidthBreakpoint
      )
    case 4:
      return getNumberOfGridItemsByScreenBreakpointAndFourColumns(
        _screenWidthBreakpoint
      )
    case 3:
      return getNumberOfGridItemsByScreenBreakpointAndThreeColumns(
        _screenWidthBreakpoint
      )
    case 2:
      return getNumberOfGridItemsByScreenBreakpointAndTwoColumns(
        _screenWidthBreakpoint
      )
    default:
      return 1
  }
}

const contentCardUtility = {
  calculateNumberOfGridColumnsByScreenWidthBreakpoint
}

export default contentCardUtility