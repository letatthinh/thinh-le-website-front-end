import CommonTextToolsContextType from '@/types/context/tools/text-tools/common'
import { createContext } from 'react'

const initializationValue: CommonTextToolsContextType = {
  inputValue: '',
  setOutputValue: (_newOutputValue: string) => {
    return _newOutputValue
  }
}

const CommonTextToolsContext = createContext(initializationValue)

export default CommonTextToolsContext
