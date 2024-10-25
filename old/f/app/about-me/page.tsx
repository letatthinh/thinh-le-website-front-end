import SectionContainer from "@/components/layouts/container/section"
import Heading1 from "@/components/texts/h1"
import pageMetadataConstant from '@/constants/metadata/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: pageMetadataConstant.aboutMe.title,
  description: pageMetadataConstant.aboutMe.description
}

export default function Page() {
  return <SectionContainer>
    <Heading1>ABOUT ME</Heading1>
  </SectionContainer>
}
