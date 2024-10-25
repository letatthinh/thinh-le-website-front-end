import projectsPageConstant from "@/app/projects/constant"
import ContentCard from "@/components/cards/content"
import SectionContainer from "@/components/layouts/container/section"
import ContentCardsSection from "@/components/layouts/section/content-cards"
import Heading1 from "@/components/texts/h1"
import pageMetadataConstant from '../../constants/metadata/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: pageMetadataConstant.projects.title,
  description: pageMetadataConstant.projects.description
}

export default function Page() {
  return <SectionContainer>
    <Heading1>PROJECTS</Heading1>
    <ContentCardsSection>
      {projectsPageConstant.contentCards.map((_projectCard, _index) => {
        return (
          <ContentCard
            key={_index}
            link={_projectCard.link}
            imageSource={_projectCard.imageSource}
            imageAlternativeText={_projectCard.imageAlternativeText}
            title={_projectCard.title}
            description={_projectCard.description}
          />
        )
      })}
    </ContentCardsSection>
  </SectionContainer>
}
