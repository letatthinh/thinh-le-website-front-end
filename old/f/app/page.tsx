import SectionContainer from '@/components/layouts/container/section'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Welcome to my personal website'
}

const Page = () => {
  return (
    <SectionContainer className={'py-96'}>
    </SectionContainer>
  )
}

export default Page
