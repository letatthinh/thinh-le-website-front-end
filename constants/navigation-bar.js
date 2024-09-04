import socialMediaConstant from '@/constants/social-media'
import navigationItemConstant from './navigation-item'

const navigationItems = [
  navigationItemConstant.home,
  navigationItemConstant.aboutMe
]

const socialMedia = [
  socialMediaConstant.facebook,
  socialMediaConstant.linkedIn,
  socialMediaConstant.gitHub,
  socialMediaConstant.leetcode
]

const brandStatements = [
  'Your next innovator in software engineering.',
  'Driven by passion, powered by code.',
  'Crafting reliable solutions for dynamic challenges.',
  'Turning complex problems into elegant solutions.',
  'Bringing creativity and precision to your projects.',
  'Engineering innovation for your team\'s success',
  'Transforming ideas into reality through technology.',
  'Where expertise meets creativity.'
]

const navigationBarConstant = {
  navigationItems,
  socialMedia,
  brandStatements
}

export default navigationBarConstant
