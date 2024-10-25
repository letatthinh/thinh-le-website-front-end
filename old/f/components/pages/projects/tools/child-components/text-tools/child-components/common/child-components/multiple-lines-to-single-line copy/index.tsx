import InputControl from '@/components/form-controls/inputs'
import Paragraph from '@/components/texts/paragraph'
import ValidationMessage from '@/components/validation-message'
import inputTypeConstant from '@/constants/input-type'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import Direction from '@/types/enums/direction'
import ValidationMessagePropertyType from '@/types/properties/validation-message'
import classNameUtility from '@/utilities/class-name'
import stringUtility from '@/utilities/string'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import CommonTextToolsContext from '../../context'
import numberOfLinesReductionConstant from './constant'
import useNumberOfLinesReductionTextTool from './hook'

export default function MultipleLinesToSingleLineTool() {
  const { getDefaultButtonThemeClassName } = useReduxTheme()
  const { inputValue, setOutputValue } = useContext(CommonTextToolsContext)
  const [
    numberOfLinesReductionInputValue,
    setNumberOfLinesReductionInputValue
  ] = useState<string>('')
  const [validationMessages, setValidationMessages] = useState<
    ValidationMessagePropertyType[]
  >([])
  const { validateNumberOfLinesReductionInput } =
    useNumberOfLinesReductionTextTool()

  const onNumberOfLinesReductionInputChange = (
    _event: ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfLinesReductionInputValue(_event.target.value)
    setValidationMessages(
      validateNumberOfLinesReductionInput(inputValue, _event.target.value)
    )
  }

  const onNumberOfLinesReductionButtonClick = (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    _event.preventDefault()
    setOutputValue(numberOfLinesReductionInputValue)
    setValidationMessages(
      validateNumberOfLinesReductionInput(
        inputValue,
        numberOfLinesReductionInputValue
      )
    )
  }

  useEffect(() => {
    setValidationMessages(
      validateNumberOfLinesReductionInput(
        inputValue,
        numberOfLinesReductionInputValue
      )
    )
  }, [
    inputValue,
    numberOfLinesReductionInputValue,
    validateNumberOfLinesReductionInput
  ])

  return (
    <section className='border-black border-2 p-3'>
      <Paragraph className='font-bold'>
        Reduce the number of lines from the text
      </Paragraph>
      <section className='mb-3'>
        <InputControl
          className='justify-between mb-1.5'
          controlLabel='New number of lines'
          controlLabelDirection={Direction.Left}
          controlId={numberOfLinesReductionConstant.id}
          controlType={inputTypeConstant.number}
          controlClassName='w-14 text-center'
          onChange={onNumberOfLinesReductionInputChange}
        />
        {validationMessages.map((_validationMessage, _index) => {
          return (
            <ValidationMessage
              key={_index}
              content={_validationMessage.content}
              type={_validationMessage.type}
            />
          )
        })}
      </section>
      <button
        type='button'
        aria-label='Run'
        className={classNameUtility.mergeClassNames([
          getDefaultButtonThemeClassName(),
          'block px-3 py-1.5 mx-auto'
        ])}
        onClick={onNumberOfLinesReductionButtonClick}
        disabled={
          validationMessages.length > 0 ||
          !stringUtility.isEmpty(numberOfLinesReductionInputValue)
        }>
        Sign in
      </button>
    </section>
  )
}
