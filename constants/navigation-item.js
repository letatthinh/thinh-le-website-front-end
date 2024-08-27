import {Home01Icon, UserCircle02Icon} from '@hugeicons/react'
import pageMetadataConstant from './metadata/page'

const home = {
  link: pageMetadataConstant.home.pathName,
  label: pageMetadataConstant.home.title.toUpperCase(),
  iconComponent: <Home01Icon
    size={22}
    variant={'solid'}
    type={'rounded'} />
}

const aboutMe = {
  link: pageMetadataConstant.aboutMe.pathName,
  label: pageMetadataConstant.aboutMe.title.toUpperCase(),
  iconComponent: <UserCircle02Icon
    size={22}
    variant={'solid'}
    type={'rounded'} />
}

const navigationItemConstant = {
  home, aboutMe
}

export default navigationItemConstant
