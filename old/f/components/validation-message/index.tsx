import ValidationMessageType from '@/types/enums/validation-message'
import ValidationMessagePropertyType from '@/types/properties/validation-message'
import classNameUtility from '@/utilities/class-name'

export default function ValidationMessage({
  content,
  type
}: ValidationMessagePropertyType) {
  return (
    <p
      className={classNameUtility.mergeClassNames([
        classNameUtility.getValidationMessageTextColorByType(type),
        'text-sm italic'
      ])}>
      {`${ValidationMessageType[type]}: ${content}`}
    </p>
  )
}
