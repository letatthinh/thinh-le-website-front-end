import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function PrimaryLinkButtonClient({children, className, href}) {
  const {
    backgroundTheme,
    borderTheme,
    textTheme
  } = useSelector(selectTheme)

  return <Link
    className={stringUtility.merge([
      backgroundTheme.hover.accentColor,
      backgroundTheme.secondaryColor,
      borderTheme.secondaryColor,
      borderTheme.hover.accentColor,
      textTheme.primaryColor,
      className
    ])}
    href={href}>
    {children}
  </Link>
}
