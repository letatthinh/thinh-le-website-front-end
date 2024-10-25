import PageMetadataType from '@/types/metadata/page'

const home: PageMetadataType = {
  path: '/',
  title: 'Home',
  description: 'Welcome to my website'
}

const aboutMe: PageMetadataType = {
  path: '/about-me',
  title: 'About me',
  description: 'About me.'
}

const projects: PageMetadataType = {
  path: '/projects',
  title: 'Projects',
  description: 'Projects.'
}

const toolsProject: PageMetadataType = {
  path: `${projects.path}/tools`,
  title: 'Tools',
  description: 'Tools.'
}

const textToolsProject: PageMetadataType = {
  path: `${toolsProject.path}/text-tools`,
  title: 'Text tools',
  description: 'Text tools.'
}

const commonTextToolsProject: PageMetadataType = {
  path: `${textToolsProject.path}/common`,
  title: 'Common text tools',
  description: 'Common tools for handling texts.'
}

const privateImageGalleryProject: PageMetadataType = {
  path: `${projects.path}/private-image-gallery`,
  title: 'Private image gallery',
  description: 'My private image gallery'
}

const signIn: PageMetadataType = {
  path: '/sign-in',
  title: 'Sign in'
}

const authorizationCallback: PageMetadataType = {
  path: `/authorization/callback`,
  title: 'Authorization callback',
  description: 'Authorization callback'
}

const pageMetadataConstant = {
  home,
  aboutMe,
  projects,
  toolsProject,
  textToolsProject,
  commonTextToolsProject,
  privateImageGalleryProject,
  signIn,
  authorizationCallback
}

export default pageMetadataConstant
