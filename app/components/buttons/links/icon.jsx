import stringUtility from '@utilities/string.jsx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import { createSelector, createStructuredSelector } from 'reselect'

const themeStates = createStructuredSelector(
  {
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function IconLinkButtonClient({
  ariaLabel, className, href, children
}) {
  const {
    textTheme
  } = useSelector(themeStates)

  return <Link
    aria-label={ariaLabel}
    className={stringUtility.merge([
      textTheme.hover.accentColor700,
      className
    ])}
    to={{
      pathname: href
    }}
    target='_blank'>
    {children}
  </Link>
}
