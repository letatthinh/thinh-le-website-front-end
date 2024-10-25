import classNameConstant from '@/constants/class-name'
import BasePropertyType from '@/types/properties/base'
import classNameUtility from '@/utilities/class-name'

export default function SectionContainer({
  className = '',
  children
}: BasePropertyType) {
  return (
    <section
      className={classNameUtility.mergeClassNames([
        classNameConstant.container.section,
        className
      ])}>
      {children}
    </section>
  )
}
