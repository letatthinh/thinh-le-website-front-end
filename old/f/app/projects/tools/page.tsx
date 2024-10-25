import toolsProjectPageConstant from '@/app/projects/tools/constant'
import ContentCard from '@/components/cards/content'
import SectionContainer from '@/components/layouts/container/section'
import ContentCardsSection from '@/components/layouts/section/content-cards'
import Heading1 from '@/components/texts/h1'
import pageMetadataConstant from '../../../constants/metadata/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: pageMetadataConstant.toolsProject.title,
  description: pageMetadataConstant.textToolsProject.description
}

export default function Page() {
  return <SectionContainer>
    <Heading1>TOOLS</Heading1>
    <ContentCardsSection>
      {toolsProjectPageConstant.contentCards.map(
        (_toolsProjectCard, _index) => {
          return (
            <ContentCard
              key={_index}
              link={_toolsProjectCard.link}
              imageSource={_toolsProjectCard.imageSource}
              imageAlternativeText={_toolsProjectCard.imageAlternativeText}
              title={_toolsProjectCard.title}
              description={_toolsProjectCard.description}
            />
          )
        }
      )}
    </ContentCardsSection>
  </SectionContainer>
}
