import navigationItemConstant from '@/constants/navigation-item'
import useNavigationBar from '@/hooks/navigation-bar'
import stringUtility from '@/utilities/string'
import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector({
  backgroundTheme: (_state) => _state.backgroundTheme,
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function VerticalNavigationBarClient() {
  const {backgroundTheme, textTheme} = useSelector(selectTheme)
  const {renderNavigationItems} = useNavigationBar()

  const activeNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      backgroundTheme.accentColor700,
      `font-bold ${textTheme.primaryColor}`
    ])
  }, [
    backgroundTheme.accentColor700,
    textTheme.primaryColor
  ])

  const nonActiveNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      backgroundTheme.hover.accentColor700,
      textTheme.hover.primaryColor
    ])
  }, [
    backgroundTheme.hover.accentColor700,
    textTheme.hover.primaryColor
  ])

  const onVerticalNavigationBarClick = (_event) => {
    _event.stopPropagation()
  }

  return <nav
    onClick={onVerticalNavigationBarClick}
    className={stringUtility.merge([
      'flex flex-col gap-2',
      backgroundTheme.primaryColor
    ])}>
    {renderNavigationItems(
      navigationItemConstant.allNavigationItems,
      'section-px py-2',
      activeNavigationItemClassName,
      nonActiveNavigationItemClassName
    )}
  </nav>
}
