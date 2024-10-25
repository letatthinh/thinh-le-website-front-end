import useReduxTheme from '@/hooks/theme/use-global-theme'
import classNameUtility from '@/utilities/class-name'
import Link from 'next/link'
import NavigationItemPropertyType from '../../../../types/properties/navigation-item'

export default function NavigationItem({
  path,
  label
}: NavigationItemPropertyType) {
  const { getNavigationItemThemeClassName } = useReduxTheme()

  return (
    <article
      className={classNameUtility.mergeClassNames([
        getNavigationItemThemeClassName(),
        'font-bold'
      ])}>
      <Link
        className={classNameUtility.mergeClassNames([
          'py-[1.125rem] px-3 lg:pl-3 pl-6',
          'lg:inline-block block'
        ])}
        href={path}>
        {label}
      </Link>
    </article>
  )
}
