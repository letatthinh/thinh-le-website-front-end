import BasePropertyType from '@/types/properties/base'

export default interface CardPropertyType extends BasePropertyType {
  imageSource: string
  imageAlternativeText: string
  title: string
  description?: string
}
