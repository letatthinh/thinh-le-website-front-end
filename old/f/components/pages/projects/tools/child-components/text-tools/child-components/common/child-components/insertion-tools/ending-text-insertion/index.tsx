import InputControl from '@/components/form-controls/inputs'
import Tool from '@/components/tool'
import inputTypeConstant from '@/constants/input-type'
import { ChangeEvent, useContext, useState } from 'react'
import CommonTextToolsContext from '../../../context'
import { id } from './constant'
import { runTool } from './utility'

export default function EndingTextInsertionTool() {
  const { inputValue, setOutputValue } = useContext(CommonTextToolsContext)
  const [endingTextInsertionInputValue, setEndingTextInsertionInputValue] =
    useState<string>('')

  const onRunButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    _event.preventDefault()
    setOutputValue(runTool(inputValue, endingTextInsertionInputValue))
  }

  const onEndingTextInsertionInputChange = (
    _event: ChangeEvent<HTMLInputElement>
  ) => {
    setEndingTextInsertionInputValue(_event.target.value)
  }

  return (
    <Tool
      name='Ending text insertion tool'
      onRunButtonClick={onRunButtonClick}
      isRunButtonDisabled={endingTextInsertionInputValue == ''}>
      <InputControl
        className='justify-between mb-1.5'
        controlLabel='Text to insert:'
        controlId={id}
        controlType={inputTypeConstant.text}
        controlClassName='text-center'
        onChange={onEndingTextInsertionInputChange}
      />
    </Tool>
  )
}
