import DefaultButton from '@/components/buttons/default'
import screenWidthConstant from '@/constants/screen-width'
import useOutsideComponentClick from '@/hooks/component/use-outside-component-click'
import classNameUtility from '@/utilities/class-name'
import { Bars3Icon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import NavigationItem from '../child-components/navigation-item'
import navigationBarConstant from '../constant'

export default function useNavigationBar() {
  const [verticalNavigationBarClassName, setVerticalNavigationBarClassName] =
    useState<string>(navigationBarConstant.vertical.hidden)

  const onPageClick = () => {
    setVerticalNavigationBarClassName(navigationBarConstant.vertical.hidden)
  }

  const navigationBarSectionContainerReference =
    useOutsideComponentClick(onPageClick)

  useEffect(() => {
    const navigationBarSectionResizeObserver = new ResizeObserver(
      (_entries) => {
        const navigationBarSectionWidth = _entries[0].contentRect.width

        if (navigationBarSectionWidth >= screenWidthConstant.lg) {
          setVerticalNavigationBarClassName(
            navigationBarConstant.vertical.hidden
          )
        }
      }
    )

    if (
      navigationBarSectionContainerReference.current &&
      verticalNavigationBarClassName === navigationBarConstant.vertical.flex
    ) {
      navigationBarSectionResizeObserver.observe(
        navigationBarSectionContainerReference.current
      )
    }

    return () => {
      navigationBarSectionResizeObserver.disconnect()
    }
  }, [navigationBarSectionContainerReference, verticalNavigationBarClassName])

  const onVerticalNavigationBarButtonClick = (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    _event.preventDefault()

    setVerticalNavigationBarClassName(
      verticalNavigationBarClassName === navigationBarConstant.vertical.hidden
        ? navigationBarConstant.vertical.flex
        : navigationBarConstant.vertical.hidden
    )
  }

  const renderNavigationBarButton = () => {
    return <DefaultButton
      ariaLabel={'Vertical navigation menu button'}
      onClick={onVerticalNavigationBarButtonClick}
      className={'lg:hidden'}
      spacingClassNameOverride={'ml-auto px-1.5 py-1.5'}
    >
      <Bars3Icon className={classNameUtility.mergeClassNames(['h-5 w-5'])} />
    </DefaultButton>
  }

  const renderNavigationItems = () => {
    return navigationBarConstant.navigationItems.map(
      (_navigationItem, _index) => {
        return (
          <NavigationItem
            key={_index}
            path={_navigationItem.path}
            label={_navigationItem.title}></NavigationItem>
        )
      }
    )
  }

  return {
    navigationBarSectionContainerReference,
    renderNavigationBarButton,
    renderNavigationItems,
    verticalNavigationBarClassName
  }
}
