import stringUtility from '@/utilities/string'

export default function ButtonLink({
  children,
  className,
  href
}) {
  return <a
    className={stringUtility.merge([
      'px-5 py-3 rounded-xl font-semibold',
      'hover:cursor-pointer',
      className
    ])}
    href={href}>
    {children}
  </a>
}
