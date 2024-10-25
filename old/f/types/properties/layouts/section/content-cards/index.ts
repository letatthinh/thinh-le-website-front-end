import GapSize from '@/types/enums/gap-size'
import BasePropertyType from '@/types/properties/base'

export default interface ContentCardsSectionPropertyType
  extends BasePropertyType {
  numberOfColumns?: number
  gapSize?: GapSize
}
