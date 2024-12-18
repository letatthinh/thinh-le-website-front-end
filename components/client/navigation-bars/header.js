import navigationBarConstant from '@/constants/navigation-bar'
import useNavigationBar from '@/hooks/navigation-bar'
import stringUtility from '@/utilities/string'
import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector({
  borderTheme: (_state) => _state.borderTheme,
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function HeaderNavigationBarClient() {
  const {borderTheme, textTheme} = useSelector(selectTheme)
  const {renderNavigationItems} = useNavigationBar()

  const activeNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      `font-bold ${textTheme.accentColor800}`,
      'before:w-4 before:h-4 before:border-b-2 before:border-l-2',
      'before:absolute before:-bottom-2 before:-left-2',
      borderTheme.before.accentColor800,
      'after:w-4 after:h-4 after:border-t-2 after:border-r-2',
      'after:absolute after:-top-2 after:-right-2',
      borderTheme.after.accentColor800
    ])
  }, [
    borderTheme.after.accentColor800,
    borderTheme.before.accentColor800,
    textTheme.accentColor800
  ])

  const nonActiveNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      `${textTheme.secondaryColor} ${textTheme.hover.accentColor800}`,
      'before:w-4 before:h-4 before:border-b-2 before:border-l-2',
      borderTheme.before.accentColor800,
      'before:absolute before:bottom-0 before:left-0',
      'before:transition-transform',
      'hover:before:-translate-x-2 hover:before:translate-y-2',
      'before:opacity-0 before:transition-opacity',
      'hover:before:opacity-100',
      'after:w-4 after:h-4 after:border-t-2 after:border-r-2',
      borderTheme.after.accentColor800,
      'after:absolute after:top-0 after:right-0',
      'after:transition-transform',
      'hover:after:translate-x-2 hover:after:-translate-y-2',
      'after:opacity-0 after:transition-opacity',
      'hover:after:opacity-100'
    ])
  }, [
    borderTheme.after.accentColor800,
    borderTheme.before.accentColor800,
    textTheme.hover.accentColor800,
    textTheme.secondaryColor
  ])

  return <nav
    className={'hidden lg:flex lg:gap-10 lg:items-center'}>
    {renderNavigationItems(
      navigationBarConstant.navigationItems,
      'text-lg relative uppercase',
      activeNavigationItemClassName,
      nonActiveNavigationItemClassName
    )}
  </nav>
}
