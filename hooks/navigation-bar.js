import VerticalNavigationBarContext from '@/contexts/vertical-navigation-bar'
import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useCallback, useContext} from 'react'

export default function useNavigationBar() {
  const urlPathName = usePathname()
  const onNavigationItemClick = useContext(VerticalNavigationBarContext)

  const renderNavigationItems = useCallback((
    navigationItems,
    className,
    activeNavigationItemClassName,
    nonActiveNavigationItemClassName,
    shouldDisplayIcon = true
  ) => {
    return navigationItems
      .map((_navigationItem, _index) => {
        return <Link
          onClick={onNavigationItemClick}
          key={_index}
          className={stringUtility.merge([
            className,
            shouldDisplayIcon
              ? 'flex gap-2 items-center'
              : undefined,
            urlPathName === _navigationItem.pathName
              ? activeNavigationItemClassName
              : nonActiveNavigationItemClassName
          ])}
          href={_navigationItem.pathName}>
          {shouldDisplayIcon ? _navigationItem.iconComponent : undefined}
          {_navigationItem.label}
        </Link>
      })
  }, [urlPathName])

  return {
    renderNavigationItems
  }
}
