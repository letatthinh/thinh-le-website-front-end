import AboutMePageHeroSectionClient
  from '@/components/client/hero-sections/pages/about-me'
import pageMetadataConstant from '@/constants/metadata/page'

export const metadata = {
  title: pageMetadataConstant.aboutMe.title,
  description: pageMetadataConstant.aboutMe.description
}

export default function AboutMe() {
  return <>
    <AboutMePageHeroSectionClient />
  </>
}
