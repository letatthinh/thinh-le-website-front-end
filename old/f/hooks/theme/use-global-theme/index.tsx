import { RootState } from '@/redux-toolkit/store'
import { updateThemeAction } from '@/redux-toolkit/store/reducer-slices/theme'
import themeUtility from '@/redux-toolkit/store/reducer-slices/theme/utility'
import Theme from '@/types/enums/theme'
import classNameUtility from '@/utilities/class-name'
import { useDispatch, useSelector } from 'react-redux'

export default function useReduxTheme() {
  const reduxTheme = useSelector((_state: RootState) => _state.theme)
  const dispatch = useDispatch()

  return classNameUtility.mergeClassNames([
      const getNavigationBarThemeClassName = () => {
      reduxTheme.primaryBackgroundColor,
      reduxTheme.borderColor
    ])
  }

  const getDefaultHoverThemeClassName = () => {
    return classNameUtility.mergeClassNames([
      reduxTheme.hover.backgroundColor,
      reduxTheme.hover.textColor
    ])
  }

  const getNavigationItemThemeClassName = () => {
    return getDefaultHoverThemeClassName()
  }

  const getDefaultButtonThemeClassName = () => {
    return classNameUtility.mergeClassNames([
      reduxTheme.borderColor,
      reduxTheme.borderWidth,
      getDefaultHoverThemeClassName()
    ])
  }

  const getInputThemeClassName = () => {
    return classNameUtility.mergeClassNames([
      reduxTheme.borderColor,
      reduxTheme.primaryBackgroundColor,
      reduxTheme.textColor
    ])
  }

  const getSlideCheckBoxThemeClassName = (_isChecked: boolean) => {
    const backgroundColor = _isChecked
      ? reduxTheme.control.input.checkBox.slider.checked.backgroundColor
      : reduxTheme.control.input.checkBox.slider.backgroundColor
    const borderColor = _isChecked
      ? reduxTheme.control.input.checkBox.slider.checked.borderColor
      : reduxTheme.control.input.checkBox.slider.borderColor
    const before_BackgroundColor = _isChecked
      ? reduxTheme.control.input.checkBox.slider.checked.before
        .backgroundColor
      : reduxTheme.control.input.checkBox.slider.before.backgroundColor

    return classNameUtility.mergeClassNames([
      backgroundColor,
      reduxTheme.borderWidth,
      borderColor,
      before_BackgroundColor
    ])
  }

  const updateTheme = (_theme: Theme) => {
    const theme = themeUtility.getThemeByName(_theme)
    dispatch(updateThemeAction(theme))
  }

  return {
    reduxTheme,
    getDefaultHoverThemeClassName,
    getDefaultButtonThemeClassName,
    getInputThemeClassName,
    getNavigationBarThemeClassName,
    getNavigationItemThemeClassName,
    getSlideCheckBoxThemeClassName,
    updateTheme
  }
}
