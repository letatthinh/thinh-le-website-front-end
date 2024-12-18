import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    textTheme: (_state) => _state.textTheme,
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

export default function SecondaryLinkButtonClient({children, className, href}) {
  const {
    textTheme,
    borderTheme
  } = useSelector(selectTheme)

  return <Link
    className={stringUtility.merge([
      borderTheme.secondaryColor,
      borderTheme.hover.accentColor800,
      textTheme.secondaryColor,
      textTheme.hover.accentColor800,
      className
    ])}
    href={href}>
    {children}
  </Link>
}
