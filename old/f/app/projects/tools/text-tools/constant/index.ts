import pageMetadataConstant from '../../../../../constants/metadata/page'
import ContentCardPropertyType from '../../../../../types/properties/cards/content'

const contentCards: ContentCardPropertyType[] = [
  {
    link: pageMetadataConstant.commonTextToolsProject.path,
    imageSource: '/images/projects/tools/text-tools/conversion.avif',
    imageAlternativeText: pageMetadataConstant.commonTextToolsProject.title,
    title: pageMetadataConstant.commonTextToolsProject.title,
    description: ''
  }
]

const textToolsProjectPageConstant = {
  contentCards
}

export default textToolsProjectPageConstant
