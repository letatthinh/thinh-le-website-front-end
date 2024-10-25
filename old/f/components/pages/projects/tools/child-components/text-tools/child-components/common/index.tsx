'use client'
import TextAreaControl from '@/components/form-controls/inputs/text-area'
import SectionContainer from '@/components/layouts/container/section'
import ContentCardsSection from '@/components/layouts/section/content-cards'
import Heading1 from '@/components/texts/h1'
import Heading2 from '@/components/texts/h2'
import Heading3 from '@/components/texts/h3'
import useAuthentication from '@/hooks/authentication'
import { ChangeEvent, useState } from 'react'
import BeginningTextInsertionTool from './child-components/insertion-tools/beginning-text-insertion'
import EndingTextInsertionTool from './child-components/insertion-tools/ending-text-insertion'
import MultipleLinesToSingleLineTool from './child-components/update-tools/multiple-lines-to-single-line'
import CommonTextToolsContext from './context'

export default function CommonTextToolsPage() {
  //useAuthentication()
  const [inputValue, setInputValue] = useState<string>('')

  const onInputChange = (_event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(_event.target.value)
  }

  return (
    <CommonTextToolsContext.Provider
      value={{
        inputValue,
        setOutputValue: setInputValue
      }}>
      <SectionContainer>
        <Heading1>Common text tools</Heading1>
        <Heading2>Input and Output</Heading2>
        <TextAreaControl
          className='h-2/5-dvh mb-1.5'
          controlId='input-text'
          controlLabel='Input text:'
          value={inputValue}
          onChange={onInputChange}
        />
        <p className='text-sm'>
          Number of lines: {inputValue.trim().split('\n').length}
        </p>
        <Heading2>Tools</Heading2>
        <Heading3>Text insertion tool</Heading3>
        <ContentCardsSection numberOfColumns={4}>
          <BeginningTextInsertionTool />
          <EndingTextInsertionTool />
        </ContentCardsSection>
        <Heading3>Text update tool</Heading3>
        <ContentCardsSection
          numberOfColumns={4}
          className='mb-12'>
          <MultipleLinesToSingleLineTool />
        </ContentCardsSection>
      </SectionContainer>
    </CommonTextToolsContext.Provider>
  )
}
