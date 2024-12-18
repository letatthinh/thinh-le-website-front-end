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
  label, className, href, children
}) {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <Link
    aria-label={label}
    className={stringUtility.merge([
      textTheme.secondaryColor,
      textTheme.hover.accentColor800,
      className
    ])}
    href={href}
    target='_blank'>
    {children}
  </Link>
}
