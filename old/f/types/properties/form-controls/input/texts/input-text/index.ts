import { ChangeEvent, RefObject } from 'react'
import FormControlPropertyType from '../../..'

export default interface InputTextControlPropertyType
  extends FormControlPropertyType {
  controlType?: string
  reference?: RefObject<HTMLInputElement>
  onChange?(event: ChangeEvent<HTMLInputElement>): void
}
