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

export default function FooterNavigationBarClient() {
  console.log('footer')
  const {backgroundTheme, textTheme} = useSelector(selectTheme)
  const {renderNavigationItems} = useNavigationBar()

  const activeNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      `font-bold ${textTheme.accentColor800}`
    ])
  }, [textTheme.accentColor800])

  const nonActiveNavigationItemClassName = useMemo(() => {
    return stringUtility.merge([
      textTheme.hover.accentColor800,
      textTheme.secondaryColor
    ])
  }, [textTheme.hover.accentColor800, textTheme.secondaryColor])

  return <nav
    className={stringUtility.merge([
      'content-mt lg:mt-0 lg:basis-8/12 text-normal',
      'grid grid-cols-2 lg:grid-cols-4 lg:justify-items-end',
      'content-gap-y lg:gap-y-0',
      backgroundTheme.primaryColor
    ])}>
    {renderNavigationItems(
      navigationItemConstant.allNavigationItems,
      '',
      activeNavigationItemClassName,
      nonActiveNavigationItemClassName,
      false
    )}
  </nav>
}
