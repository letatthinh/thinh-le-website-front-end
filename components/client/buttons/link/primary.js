import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function PrimaryLinkButtonClient({children, className, href}) {
  const {
    backgroundTheme,
    textTheme
  } = useSelector(selectTheme)

  return <Link
    className={stringUtility.merge([
      backgroundTheme.hover.accentColor,
      backgroundTheme.secondaryColor,
      textTheme.primaryColor,
      className
    ])}
    href={href}>
    {children}
  </Link>
}
