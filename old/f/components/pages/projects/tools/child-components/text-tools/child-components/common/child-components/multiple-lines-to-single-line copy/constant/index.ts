/* eslint-disable max-len */
import ValidationMessageType from '@/types/enums/validation-message'
import ValidationMessagePropertyType
  from '@/types/properties/validation-message'

const id = 'reduce-number-of-lines-tool'

const newNumberOfLinesEmpty: ValidationMessagePropertyType = {
  content: 'The new number of lines is empty.',
  type: ValidationMessageType.Error
}

const newNumberOfLinesLargerThanFromInputText: ValidationMessagePropertyType = {
  content:
    'The new number of lines is larger than the number of lines from the input text.',
  type: ValidationMessageType.Error
}

const newNumberOfLinesSmallerThan1: ValidationMessagePropertyType = {
  content: 'The new number of lines is smaller than 1.',
  type: ValidationMessageType.Error
}

const validationMessage = {
  newNumberOfLinesEmpty,
  newNumberOfLinesLargerThanFromInputText,
  newNumberOfLinesSmallerThan1
}

const numberOfLinesReductionConstant = {
  validationMessage,
  id
}

export default numberOfLinesReductionConstant
