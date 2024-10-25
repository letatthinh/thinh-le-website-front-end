import pageMetadataConstant from '../../../constants/metadata/page'
import ContentCardPropertyType from '../../../types/properties/cards/content'

const contentCards: ContentCardPropertyType[] = [
  {
    link: pageMetadataConstant.toolsProject.path,
    imageSource: '/images/projects/tools.avif',
    imageAlternativeText: pageMetadataConstant.toolsProject.title,
    title: pageMetadataConstant.toolsProject.title,
    description: pageMetadataConstant.toolsProject.description
  }
]

const projectsHomePageConstant = {
  contentCards
}

export default projectsHomePageConstant
