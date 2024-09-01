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

export default function IconLinkButtonClient({children, className, href}) {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <Link
    className={stringUtility.merge([
      textTheme.secondaryColor,
      textTheme.hover.accentColor,
      className
    ])}
    href={href}
    target='_blank'>
    {children}
  </Link>
}
