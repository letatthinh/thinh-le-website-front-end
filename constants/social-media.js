import {
  Facebook01Icon,
  Github01Icon,
  LeetcodeIcon,
  Linkedin01Icon
} from '@hugeicons/react'

const iconSize = 24

const facebook = {
  label: 'Facebook icon',
  link: 'https://www.facebook.com/thinhle27',
  icon: <Facebook01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const linkedIn = {
  label: 'LinkedIn icon',
  link: 'https://www.linkedin.com/in/letatthinh',
  icon: <Linkedin01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const gitHub = {
  label: 'GitHub icon',
  link: 'https://github.com/letatthinh',
  icon: <Github01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const leetcode = {
  label: 'Leetcode icon',
  link: 'https://leetcode.com/u/letatthinh',
  icon: <LeetcodeIcon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const socialMediaConstant = {
  facebook,
  linkedIn,
  gitHub,
  leetcode
}

export default socialMediaConstant
