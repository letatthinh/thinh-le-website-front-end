import pageMetadataConstant from '@constants/metadata/page.js'
import HeroSection from './hero-section.jsx'

export function meta() {
  return [
    {title: pageMetadataConstant.home.title},
    {name: 'description', content: pageMetadataConstant.home.description}
  ]
}

export default function Home() {
  return <>
    <HeroSection />
  </>
}
