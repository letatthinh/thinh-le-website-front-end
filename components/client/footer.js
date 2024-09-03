import IconLinkButtonClient from '@/components/client/buttons/links/icon'
import {
  Facebook01Icon,
  Github01Icon,
  LeetcodeIcon,
  Linkedin01Icon
} from '@hugeicons/react'

export default function FooterClient() {
  return <footer>
    <div className={'mt-6 flex gap-2.5 justify-center sm:justify-end'}>
      <IconLinkButtonClient
        href={'https://www.facebook.com/thinhle27'}>
        <Facebook01Icon
          size={26}
          variant={'solid'}
          type={'rounded'} />
      </IconLinkButtonClient>
      <IconLinkButtonClient
        href={'https://www.linkedin.com/in/letatthinh'}>
        <Linkedin01Icon
          size={26}
          variant={'solid'}
          type={'rounded'} />
      </IconLinkButtonClient>
      <IconLinkButtonClient
        href={'https://github.com/letatthinh'}>
        <Github01Icon
          size={26}
          variant={'solid'}
          type={'rounded'} />
      </IconLinkButtonClient>
      <IconLinkButtonClient
        href={'https://leetcode.com/u/letatthinh'}>
        <LeetcodeIcon
          size={26}
          variant={'solid'}
          type={'rounded'} />
      </IconLinkButtonClient>
    </div>
  </footer>
}
