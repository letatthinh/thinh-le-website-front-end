import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
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
  } = useSelector(selectTheme)

  return <Link
    aria-label={ariaLabel}
    className={stringUtility.merge([
      textTheme.hover.accentColor700,
      className
    ])}
    href={href}
    target='_blank'>
    {children}
  </Link>
}
