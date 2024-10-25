import Tool from '@/components/tool'
import { useContext } from 'react'
import CommonTextToolsContext from '../../../context'
import { runTool } from './utility'

export default function MultipleLinesToSingleLineTool() {
  const { inputValue, setOutputValue } = useContext(CommonTextToolsContext)

  const onRunButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    _event.preventDefault()
    setOutputValue(runTool(inputValue))
  }

  return (
    <Tool
      name='Multiple lines to single line tool'
      onRunButtonClick={onRunButtonClick}
    />
  )
}
