import navigationBarConstant from '@/constants/navigation-bar'
import useNavigationBar from '@/hooks/navigation-bar'
import stringUtility from '@/utilities/string'
import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector({
  backgroundTheme: (_state) => _state.backgroundTheme,
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function FooterNavigationBarClient() {
  const {backgroundTheme, textTheme} = useSelector(selectTheme)
  const {renderNavigationItems} = useNavigationBar()

  const activeNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      `font-bold ${textTheme.accentColor}`
    ])
  }, [textTheme.accentColor])

  const nonActiveNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      textTheme.hover.accentColor,
      textTheme.secondaryColor
    ])
  }, [textTheme.hover.accentColor, textTheme.secondaryColor])

  return <nav
    className={stringUtility.merge([
      'content-mt lg:basis-8/12',
      'grid grid-cols-2 lg:grid-cols-4',
      'gap-y-6 lg:gap-y-0',
      backgroundTheme.primaryColor
    ])}>
    {renderNavigationItems(
      navigationBarConstant.navigationItems,
      '',
      activeNavigationItemClassName,
      nonActiveNavigationItemClassName,
      false
    )}
  </nav>
}
