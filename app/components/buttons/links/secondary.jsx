import stringUtility from '@utilities/string.jsx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import { createSelector, createStructuredSelector } from 'reselect'

const themeStates = createStructuredSelector(
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
  } = useSelector(themeStates)

  return <Link
    aria-label={ariaLabel}
    className={stringUtility.merge([
      borderTheme.secondaryColor,
      borderTheme.hover.accentColor700,
      textTheme.hover.accentColor700,
      className
    ])}
    to={{
      pathname: href
    }}>
    {children}
  </Link>
}
