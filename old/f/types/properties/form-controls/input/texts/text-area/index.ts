import { ChangeEvent, RefObject } from 'react'
import FormControlPropertyType from '../../..'

export default interface TextAreaControlPropertyType
  extends FormControlPropertyType {
  reference?: RefObject<HTMLTextAreaElement>
  onChange?(event: ChangeEvent<HTMLTextAreaElement>): void
}
