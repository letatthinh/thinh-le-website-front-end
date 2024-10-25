import InputContainer from '@/components/layouts/container/input'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import Direction from '@/types/enums/direction'
import TextAreaControlPropertyType from '@/types/properties/form-controls/input/texts/text-area'
import classNameUtility from '@/utilities/class-name'
import { ChangeEvent, useEffect, useState } from 'react'

export default function TextAreaControl({
  className,
  controlLabel,
  controlLabelDirection,
  controlLabelClassName,
  shouldShowLabel,
  controlId,
  controlName,
  reference,
  value,
  onChange
}: TextAreaControlPropertyType) {
  const { getInputThemeClassName } = useReduxTheme()
  const [textAreaValue, setTextAreaValue] = useState('')

  useEffect(() => {
    if (value) {
      setTextAreaValue(value)
    }
  }, [value])

  const onTextAreaControlChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <InputContainer
      className={className ?? ''}
      controlLabel={controlLabel ?? ''}
      controlLabelDirection={controlLabelDirection ?? Direction.Top}
      controlLabelClassName={controlLabelClassName ?? ''}
      shouldShowLabel={shouldShowLabel ?? true}
      controlId={controlId}>
      <textarea
        ref={reference}
        id={controlId}
        name={controlName ?? controlId}
        className={classNameUtility.mergeClassNames([
          getInputThemeClassName(),
          'w-full border-2 h-full px-3 py-1.5'
        ])}
        value={textAreaValue}
        onChange={onTextAreaControlChange}
      />
    </InputContainer>
  )
}
