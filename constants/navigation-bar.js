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

const brandStatements = [
  'tech enthusiast, crafting user-friendly applications.',
  'passionate developer, turning ideas into reality.',
  'skilled programmer, streamlining processes through code.',
  'problem solver, optimizing workflows for success.'
]

const navigationBarConstant = {
  navigationItems,
  socialMedia,
  brandStatements
}

export default navigationBarConstant
