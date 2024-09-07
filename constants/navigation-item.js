import {
  Home01Icon,
  Mailbox01Icon,
  UserCircle02Icon,
  WorkflowCircle06Icon
} from '@hugeicons/react'
import pageMetadataConstant from './metadata/page'

const iconSize = 21

const home = {
  pathName: pageMetadataConstant.home.pathName,
  label: pageMetadataConstant.home.title,
  iconComponent: <Home01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const aboutMe = {
  pathName: pageMetadataConstant.aboutMe.pathName,
  label: pageMetadataConstant.aboutMe.title,
  iconComponent: <UserCircle02Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const projects = {
  pathName: pageMetadataConstant.projects.pathName,
  label: pageMetadataConstant.projects.title,
  iconComponent: <WorkflowCircle06Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const contactMe = {
  pathName: pageMetadataConstant.contactMe.pathName,
  label: pageMetadataConstant.contactMe.title,
  iconComponent: <Mailbox01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const navigationItemConstant = {
  home, aboutMe, projects, contactMe
}

export default navigationItemConstant
