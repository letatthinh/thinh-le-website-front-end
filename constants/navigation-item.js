import {
  Home01Icon,
  Mailbox01Icon,
  UserCircleIcon,
  WorkflowCircle06Icon
} from '@hugeicons/react'
import pageMetadataConstant from './metadata/page'

const home = {
  path: pageMetadataConstant.home.path,
  label: pageMetadataConstant.home.title,
  iconComponent: <Home01Icon
    className={'wh-normal'}
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const aboutMe = {
  path: pageMetadataConstant.aboutMe.path,
  label: pageMetadataConstant.aboutMe.title,
  iconComponent: <UserCircleIcon
    className={'wh-normal'}
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const projects = {
  path: pageMetadataConstant.projects.path,
  label: pageMetadataConstant.projects.title,
  iconComponent: <WorkflowCircle06Icon
    className={'wh-normal'}
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const contactMe = {
  path: pageMetadataConstant.contactMe.path,
  label: pageMetadataConstant.contactMe.title,
  iconComponent: <Mailbox01Icon
    className={'wh-normal'}
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const allNavigationItems = [home, aboutMe, projects, contactMe]

const navigationItemConstant = {
  home, aboutMe, projects, contactMe, allNavigationItems
}

export default navigationItemConstant
