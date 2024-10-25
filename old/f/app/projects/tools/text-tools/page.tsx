import textToolsProjectPageConstant
  from '@/app/projects/tools/text-tools/constant'
import ContentCard from '@/components/cards/content'
import SectionContainer from '@/components/layouts/container/section'
import ContentCardsSection from '@/components/layouts/section/content-cards'
import Heading1 from '@/components/texts/h1'
import Heading2 from '@/components/texts/h2'
import pageMetadataConstant from '../../../../constants/metadata/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: pageMetadataConstant.textToolsProject.title,
  description: pageMetadataConstant.textToolsProject.description
}

export default function Page() {
  return <SectionContainer>
    <Heading1>TEXT TOOLS</Heading1>
    <Heading2>Modify text tools</Heading2>
    <ContentCardsSection>
      {textToolsProjectPageConstant.contentCards.map(
        (_textToolProjectCard, _index) => {
          return (
            <ContentCard
              key={_index}
              link={_textToolProjectCard.link}
              imageSource={_textToolProjectCard.imageSource}
              imageAlternativeText={_textToolProjectCard.imageAlternativeText}
              title={_textToolProjectCard.title}
              description={_textToolProjectCard.description}
            />
          )
        }
      )}
    </ContentCardsSection>
  </SectionContainer>
}
