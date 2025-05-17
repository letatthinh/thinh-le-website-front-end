import {
  Facebook01Icon,
  Github01Icon,
  LeetcodeIcon,
  Linkedin01Icon
} from '@hugeicons/react'

const facebook = {
  label: 'Facebook icon',
  link: 'https://www.facebook.com/letatthinh527',
  icon: <Facebook01Icon
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const linkedIn = {
  label: 'LinkedIn icon',
  link: 'https://www.linkedin.com/in/letatthinh',
  icon: <Linkedin01Icon
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const gitHub = {
  label: 'GitHub icon',
  link: 'https://github.com/letatthinh',
  icon: <Github01Icon
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const leetCode = {
  label: 'Leetcode icon',
  link: 'https://leetcode.com/u/letatthinh',
  icon: <LeetcodeIcon
    size={'100%'}
    variant={'solid'}
    type={'rounded'} />
}

const allSocialMedia = [facebook, linkedIn, gitHub, leetCode]

const socialMediaConstant = {
  facebook,
  linkedIn,
  gitHub,
  leetCode,
  allSocialMedia
}

export default socialMediaConstant
