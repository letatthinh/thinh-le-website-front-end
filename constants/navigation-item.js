import {Home01Icon, UserCircle02Icon} from '@hugeicons/react'
import pageMetadataConstant from './metadata/page'

const home = {
  pathName: pageMetadataConstant.home.pathName,
  label: pageMetadataConstant.home.title,
  iconComponent: <Home01Icon
    size={21}
    variant={'solid'}
    type={'rounded'} />
}

const aboutMe = {
  pathName: pageMetadataConstant.aboutMe.pathName,
  label: pageMetadataConstant.aboutMe.title,
  iconComponent: <UserCircle02Icon
    size={21}
    variant={'solid'}
    type={'rounded'} />
}

const navigationItemConstant = {
  home, aboutMe
}

export default navigationItemConstant
