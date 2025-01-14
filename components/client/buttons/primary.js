import stringUtility from '@/utilities/string'
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

export default function PrimaryButtonClient({
  children, className, type, ariaLabel, onClick
}) {
  const {
    backgroundTheme,
    borderTheme,
    textTheme
  } = useSelector(selectTheme)

  return <button
    aria-label={ariaLabel}
    type={type}
    className={stringUtility.merge([
      backgroundTheme.hover.accentColor700,
      backgroundTheme.secondaryColor,
      borderTheme.secondaryColor,
      borderTheme.hover.accentColor700,
      textTheme.primaryColor,
      className
    ])}
    onClick={onClick}>
    {children}
  </button>
}
