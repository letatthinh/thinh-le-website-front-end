import socialMediaConstant from '@/constants/social-media'
import navigationItemConstant from './navigation-item'

const navigationItems = [
  navigationItemConstant.home,
  navigationItemConstant.aboutMe,
  navigationItemConstant.projects,
  navigationItemConstant.contactMe
]

const socialMedia = [
  socialMediaConstant.facebook,
  socialMediaConstant.linkedIn,
  socialMediaConstant.gitHub,
  socialMediaConstant.leetcode
]

const navigationBarConstant = {
  navigationItems,
  socialMedia
}

export default navigationBarConstant
