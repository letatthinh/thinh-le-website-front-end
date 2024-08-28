import navigationBarConstant from '@/constants/navigation-bar'
import stringUtility from '@/utilities/string'
import {Hamburger01Icon} from '@hugeicons/react'
import {useRef} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import NavigationItemClient from './navigation-item'

const selectTheme = createStructuredSelector({
  textTheme: (_state) => _state.textTheme
}, createSelector)

export default function NavigationBar() {
  const {textTheme} = useSelector(selectTheme)
  const menuButtonRef = useRef(null)

  const onMenuButtonClick = (_event) => {
    _event.preventDefault()
    const menuButton = menuButtonRef.current
    menuButton.classList.add('animate-hamburger')

    setTimeout(() => {
      menuButton.classList.remove('animate-hamburger')
    }, '300')
  }

  return <section
    className={stringUtility.merge([
      'container-layout py-6 pl-5 pr-5 md:pr-7',
      'flex justify-between items-center'
    ])}>
    <h1 className={`text-3xl ${textTheme.secondaryColor}`}>Thinh</h1>
    <nav className={'hidden md:flex md:gap-9 md:items-center'}>
      {navigationBarConstant.navigationItems
        .map((_navigationItem, _index) => {
          return <NavigationItemClient
            key={_index}
            link={_navigationItem.link}
            label={_navigationItem.label}
            iconComponent={_navigationItem.iconComponent} />
        })}
    </nav>
    <button
      ref={menuButtonRef}
      onClick={onMenuButtonClick}
      className={'md:hidden'}>
      <Hamburger01Icon size={32} variant={'solid'} type={'rounded'} />
    </button>
  </section>
}
