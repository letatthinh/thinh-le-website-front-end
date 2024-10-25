import pageMetadataConstant from '../metadata/page'

const appUri = 'https://localhost:3000'

const pageUri = {
  app: appUri,
  authorizationCallback: `${appUri}${pageMetadataConstant.authorizationCallback}`
}

export default pageUri