import BasePropertyType from '@/types/properties/base'

export default interface NavigationItemPropertyType extends BasePropertyType {
  path: string
  label: string
}
