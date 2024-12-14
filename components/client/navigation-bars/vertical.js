import navigationBarConstant from '@/constants/navigation-bar'
import useNavigationBar from '@/hooks/navigation-bar'
import stringUtility from '@/utilities/string'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSelector, createStructuredSelector } from 'reselect'

const selectTheme = createStructuredSelector({
  backgroundTheme: (_state) => _state.backgroundTheme,
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function VerticalNavigationBarClient() {
  const {backgroundTheme, textTheme} = useSelector(selectTheme)
  const {renderNavigationItems} = useNavigationBar()

  const activeNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      backgroundTheme.accentColor800,
      `font-bold ${textTheme.primaryColor}`
    ])
  }, [
    backgroundTheme.accentColor800,
    textTheme.primaryColor
  ])

  const nonActiveNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      backgroundTheme.hover.accentColor800,
      textTheme.hover.primaryColor,
      textTheme.secondaryColor
    ])
  }, [
    backgroundTheme.hover.accentColor800,
    textTheme.hover.primaryColor,
    textTheme.secondaryColor
  ])

  const onVerticalNavigationBarClick = useCallback((_event) => {
    _event.stopPropagation()
  }, [])

  return <nav
    onClick={onVerticalNavigationBarClick}
    className={stringUtility.merge([
      'w-80 h-full',
      'flex flex-col gap-2',
      backgroundTheme.primaryColor
    ])}>
    {renderNavigationItems(
      navigationBarConstant.navigationItems,
      'text-lg section-px py-2',
      activeNavigationItemClassName,
      nonActiveNavigationItemClassName
    )}
  </nav>
}
