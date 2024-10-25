import FormControlPropertyType from '@/types/properties/form-controls'
import { ChangeEvent } from 'react'

export default interface CheckBoxControlPropertyType
  extends FormControlPropertyType {
  onChange?(event: ChangeEvent<HTMLInputElement>): void
}
