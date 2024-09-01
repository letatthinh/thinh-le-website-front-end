import navigationBarConstant from '@/constants/navigation-bar'
import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector({
  borderTheme: (_state) => _state.borderTheme,
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function HeaderNavigationBarClient() {
  const {borderTheme, textTheme} = useSelector(selectTheme)
  const urlPathName = usePathname()

  const activeNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      `font-bold ${textTheme.accentColor}`,
      'before:w-4 before:h-4 before:border-b-2 before:border-l-2',
      'before:absolute before:-bottom-2 before:-left-2',
      borderTheme.before.accentColor,
      'after:w-4 after:h-4 after:border-t-2 after:border-r-2',
      'after:absolute after:-top-2 after:-right-2',
      borderTheme.after.accentColor
    ])
  }, [
    borderTheme.after.accentColor,
    borderTheme.before.accentColor,
    textTheme.accentColor
  ])

  const nonActiveNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      `${textTheme.secondaryColor} ${textTheme.hover.accentColor}`,
      'before:w-4 before:h-4 before:border-b-2 before:border-l-2',
      borderTheme.before.accentColor,
      'before:absolute before:bottom-0 before:left-0',
      'before:transition-transform',
      'hover:before:-translate-x-2 hover:before:translate-y-2',
      'before:opacity-0 before:transition-opacity',
      'hover:before:opacity-100',
      'after:w-4 after:h-4 after:border-t-2 after:border-r-2',
      borderTheme.after.accentColor,
      'after:absolute after:top-0 after:right-0',
      'after:transition-transform',
      'hover:after:translate-x-2 hover:after:-translate-y-2',
      'after:opacity-0 after:transition-opacity',
      'hover:after:opacity-100'
    ])
  }, [
    borderTheme.after.accentColor,
    borderTheme.before.accentColor,
    textTheme.hover.accentColor,
    textTheme.secondaryColor
  ])

  return <nav
    className={'hidden lg:flex lg:gap-10 lg:items-center'}>
    {navigationBarConstant.navigationItems
      .map((_navigationItem, _index) => {
        return <Link
          key={_index}
          className={stringUtility.merge([
            'text-lg relative flex gap-2 items-center',
            urlPathName === _navigationItem.pathName
              ? activeNavigationItemClassName
              : nonActiveNavigationItemClassName
          ])}
          href={_navigationItem.pathName}>
          {_navigationItem.iconComponent}
          {_navigationItem.label}
        </Link>
      })}
  </nav>
}
