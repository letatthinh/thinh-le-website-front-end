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

export default function SecondaryLinkButtonClient({
  children, className, href, ariaLabel
}) {
  const {
    textTheme,
    borderTheme
  } = useSelector(selectTheme)

  return <Link
    aria-label={ariaLabel}
    className={stringUtility.merge([
      borderTheme.secondaryColor,
      borderTheme.hover.accentColor700,
      textTheme.secondaryColor,
      textTheme.hover.accentColor700,
      className
    ])}
    href={href}>
    {children}
  </Link>
}
