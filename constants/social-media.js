import {
  Facebook01Icon,
  Github01Icon,
  LeetcodeIcon,
  Linkedin01Icon
} from '@hugeicons/react'

const iconSize = 30

const facebook = {
  link: 'https://www.facebook.com/thinhle27',
  icon: <Facebook01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const linkedIn = {
  link: 'https://www.linkedin.com/in/letatthinh',
  icon: <Linkedin01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const gitHub = {
  link: 'https://github.com/letatthinh',
  icon: <Github01Icon
    size={iconSize}
    variant={'solid'}
    type={'rounded'} />
}

const leetcode = {
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
