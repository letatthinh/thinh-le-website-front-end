import InputControl from '@/components/form-controls/inputs'
import Tool from '@/components/tool'
import inputTypeConstant from '@/constants/input-type'
import React, { ChangeEvent, useContext, useState } from 'react'
import CommonTextToolsContext from '../../../context'
import { id } from './constant'
import { runTool } from './utility'

export default function BeginningTextInsertionTool() {
  const { inputValue, setOutputValue } = useContext(CommonTextToolsContext)
  const [
    beginningTextInsertionInputValue,
    setBeginningTextInsertionInputValue
  ] = useState<string>('')

  const onRunButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    _event.preventDefault()
    setOutputValue(runTool(inputValue, beginningTextInsertionInputValue))
  }

  const onEndingTextInsertionInputChange = (
    _event: ChangeEvent<HTMLInputElement>
  ) => {
    setBeginningTextInsertionInputValue(_event.target.value)
  }

  return (
    <Tool
      name='Beginning text insertion tool'
      onRunButtonClick={onRunButtonClick}
      isRunButtonDisabled={beginningTextInsertionInputValue == ''}>
      <InputControl
        className='mb-1.5'
        controlLabel='Text to insert:'
        controlLabelClassName='grow'
        controlId={id}
        controlType={inputTypeConstant.text}
        controlClassName='text-center'
        onChange={onEndingTextInsertionInputChange}
      />
    </Tool>
  )
}
