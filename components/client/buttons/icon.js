import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function IconButtonClient({
  children, ariaLabel, ref, type = 'button', onClick, className
}) {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <button
    aria-label={ariaLabel}
    ref={ref}
    type={type}
    onClick={onClick}
    className={stringUtility.merge([
      textTheme.secondaryColor,
      textTheme.hover.accentColor700,
      className
    ])}>
    {children}
  </button>
}
