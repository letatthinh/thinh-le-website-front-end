import GapSize from '@/types/enums/gap-size'
import ContentCardsSectionPropertyType from '@/types/properties/layouts/section/content-cards'
import classNameUtility from '@/utilities/class-name'

export default function ContentCardsSection({
  id,
  className,
  children,
  numberOfColumns,
  gapSize,
  reference
}: ContentCardsSectionPropertyType) {
  return (
    <section
      id={id ?? 'content-card'}
      ref={reference}
      className={classNameUtility.mergeClassNames([
        classNameUtility.getContentCardsSectionClassNameByNumberOfColumns(
          numberOfColumns ?? 6,
          gapSize ?? GapSize.Medium
        ),
        className ?? ''
      ])}>
      {children}
    </section>
  )
}
