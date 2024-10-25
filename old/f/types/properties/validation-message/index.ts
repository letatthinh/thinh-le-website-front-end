import ValidationMessageType from '@/types/enums/validation-message'
import BasePropertyType from '../base'

export default interface ValidationMessagePropertyType
  extends BasePropertyType {
  content: string
  type: ValidationMessageType
}
