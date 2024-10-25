import ValidationMessagePropertyType from '@/types/properties/validation-message'
import { useCallback } from 'react'
import numberOfLinesReductionConstant from '../constant'

export default function useNumberOfLinesReductionTextTool() {
  const validateNumberOfLinesReductionInput = useCallback(
    (
      _inputValue: string,
      _newNumberOfTextLinesValue: string
    ): ValidationMessagePropertyType[] => {
      const validationMessages: ValidationMessagePropertyType[] = []

      if (_newNumberOfTextLinesValue) {
        const numberOfTextLines = _inputValue.trim().split('\n').length ?? 1

        if (Number(_newNumberOfTextLinesValue) > numberOfTextLines) {
          validationMessages.push(
            numberOfLinesReductionConstant.validationMessage
              .newNumberOfLinesLargerThanFromInputText
          )
        }

        if (Number(_newNumberOfTextLinesValue) < 1) {
          validationMessages.push(
            numberOfLinesReductionConstant.validationMessage
              .newNumberOfLinesSmallerThan1
          )
        }
      }

      return validationMessages
    },
    []
  )

  return {
    validateNumberOfLinesReductionInput
  }
}
