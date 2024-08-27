import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector({
  borderTheme: (_state) => _state.borderTheme,
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function NavigationItemClient({
  link, label, iconComponent
}) {
  const {borderTheme, textTheme} = useSelector(selectTheme)
  const pathnameFromUrl = usePathname()

  const setActiveNavigationItemClassNames = useCallback(() => {
    return pathnameFromUrl === link
      ? stringUtility.merge([
        `font-bold ${textTheme.accentColor}`,
        'before:w-5 before:h-3.5 before:border-b-2 before:border-l-2',
        'before:absolute before:-bottom-1 before:-left-2',
        borderTheme.before.accentColor,
        'after:w-5 after:h-3.5 after:border-t-2 after:border-r-2',
        'after:absolute after:-top-1 after:-right-2',
        borderTheme.after.accentColor
      ])
      : ''
  }, [
    borderTheme.after.accentColor,
    borderTheme.before.accentColor,
    link, pathnameFromUrl,
    textTheme.accentColor
  ])

  const setNonActiveNavigationItemClassNames = useCallback(() => {
    return pathnameFromUrl !== link
      ? stringUtility.merge([
        `${textTheme.secondaryColor} ${textTheme.hover.accentColor}`,
        'before:w-5 before:h-3.5 before:border-b-2 before:border-l-2',
        borderTheme.before.accentColor,
        'before:absolute before:bottom-0 before:left-0',
        'before:transition-transform',
        'hover:before:-translate-x-2 hover:before:translate-y-1',
        'before:opacity-0 before:transition-opacity',
        'hover:before:opacity-100',
        'after:w-5 after:h-3.5 after:border-t-2 after:border-r-2',
        borderTheme.after.accentColor,
        'after:absolute after:top-0 after:right-0',
        'after:transition-transform',
        'hover:after:translate-x-2 hover:after:-translate-y-1',
        'after:opacity-0 after:transition-opacity',
        'hover:after:opacity-100'
      ])
      : ''
  }, [
    borderTheme.after.accentColor,
    borderTheme.before.accentColor,
    link, pathnameFromUrl,
    textTheme.hover.accentColor
  ])

  return <Link
    className={stringUtility.merge([
      'text-lg relative flex gap-2 items-center',
      `${setActiveNavigationItemClassNames()}`,
      `${setNonActiveNavigationItemClassNames()}`
    ])}
    href={link}>
    {iconComponent}
    {label}
  </Link>
}
