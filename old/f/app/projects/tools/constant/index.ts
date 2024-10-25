import pageMetadataConstant from '../../../../constants/metadata/page'
import ContentCardPropertyType from '../../../../types/properties/cards/content'

const contentCards: ContentCardPropertyType[] = [
  {
    link: pageMetadataConstant.textToolsProject.path,
    imageSource: '/images/projects/tools/text-tools.avif',
    imageAlternativeText: pageMetadataConstant.textToolsProject.title,
    title: pageMetadataConstant.textToolsProject.title,
    description: 'Tools to work with texts'
  }
]

const toolsProjectPageConstant = {
  contentCards
}

export default toolsProjectPageConstant
