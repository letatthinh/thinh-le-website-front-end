import HeroSection from '@components/pages/about-me/hero-section.jsx'
import pageMetadataConstant from '@constants/metadata/page.js'

export function meta() {
  return [
    {title: pageMetadataConstant.aboutMe.title},
    {name: 'description', content: pageMetadataConstant.aboutMe.description}
  ]
}

export default function About() {
  return <>
    <HeroSection />
  </>
}
