import pageMetadataConstant from '../../../constants/metadata/page'

const navigationBarConstant = {
  navigationItems: [
    pageMetadataConstant.home,
    pageMetadataConstant.aboutMe,
    pageMetadataConstant.projects
  ],
  vertical: {
    flex: 'flex',
    hidden: 'hidden'
  }
}

export default navigationBarConstant
