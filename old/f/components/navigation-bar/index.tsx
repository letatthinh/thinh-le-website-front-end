import DefaultButton from '@/components/buttons/default'
import pageMetadataConstant from '../../constants/metadata/page'
import useNavigation from '@/hooks/navigation'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import Theme from '@/types/enums/theme'
import classNameUtility from '@/utilities/class-name'
import React, { ChangeEvent } from 'react'
import SlideCheckBoxControl from '../form-controls/inputs/checkboxes/slide-checkbox'
import useNavigationBar from './hook'

export default function NavigationBar() {
  const {
    reduxTheme,
    getNavigationBarThemeClassName,
    updateTheme
  } = useReduxTheme()
  const {
    navigationBarSectionContainerReference,
    renderNavigationBarButton,
    renderNavigationItems,
    verticalNavigationBarClassName
  } = useNavigationBar()
  const {
    navigateToUrl
  } = useNavigation()

  const onThemeChange = (_event: ChangeEvent<HTMLInputElement>) => {
    const newTheme: Theme = _event.target.checked ? Theme.Black : Theme.White

    updateTheme(newTheme)
  }

  const onSignInButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    _event.preventDefault()
    navigateToUrl(pageMetadataConstant.signIn.path)
  }

  return (
    <>
      <section
        ref={navigationBarSectionContainerReference}
        className={classNameUtility.mergeClassNames([
          reduxTheme.borderColor,
          'lg:py-0 py-3 lg:px-0 px-6'
        ])}>
        <nav
          className={classNameUtility.mergeClassNames([
            'absolute top-[62px] bottom-0 right-0 lg:static',
            'border-l-2 lg:border-l-0 lg:px-6 min-w-[280px] z-[1]',
            'lg:flex flex-col gap-y-6 lg:flex-row',
            'lg:justify-between lg:items-center',
            getNavigationBarThemeClassName(),
            verticalNavigationBarClassName
          ])}>
          <article className='lg:pl-0 pl-6'>ltt website</article>
          <section className={`flex flex-col lg:flex-row lg:justify-center`}>
            {renderNavigationItems()}
          </section>
          <section className='flex gap-1.5 items-center lg:pl-0 pl-6 '>
            <SlideCheckBoxControl
              controlLabel='Change theme toggle'
              shouldShowLabel={false}
              controlId='change-theme-toggle'
              initialValue={false}
              onChange={onThemeChange}
            />
            <DefaultButton
              ariaLabel={'Sign in button'}
              label={'Sign in'}
              onClick={onSignInButtonClick}
            />
          </section>
        </nav>
        <section>{renderNavigationBarButton()}</section>
      </section>
    </>
  )
}
