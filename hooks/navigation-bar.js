import VerticalNavigationBarContext from '@/contexts/vertical-navigation-bar'
import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useCallback, useContext} from 'react'

export default function useNavigationBar() {
  const urlPathName = usePathname()
  const onNavigationItemClick = useContext(VerticalNavigationBarContext)

  const isChildPathOf = useCallback((_navigationItemPathName) => {
    // Not homepage & child path
    return _navigationItemPathName.length > 1 &&
      urlPathName.includes(_navigationItemPathName)
  }, [urlPathName])

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
            (urlPathName === _navigationItem.path ||
            isChildPathOf(_navigationItem.path))
              ? activeNavigationItemClassName
              : nonActiveNavigationItemClassName
          ])}
          href={_navigationItem.path}>
          {shouldDisplayIcon
            ? <div className={'wh-normal'}>
              {_navigationItem.iconComponent}
            </div>
            : undefined}
          {_navigationItem.label}
        </Link>
      })
  }, [isChildPathOf, onNavigationItemClick, urlPathName])

  return {
    renderNavigationItems
  }
}
