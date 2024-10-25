import SectionContainer from "@/components/layouts/container/section"
import Heading1 from "@/components/texts/h1"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authorization callback',
  description: 'Authorization callback'
}

const Page = () => {
  return <SectionContainer>
    <Heading1>AUTHORIZATION CALLBACK</Heading1>
  </SectionContainer>
}

export default Page
