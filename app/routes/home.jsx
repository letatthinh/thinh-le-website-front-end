import HeroSection from '@components/pages/home/hero-section.jsx'
import pageMetadataConstant from '@constants/metadata/page.js'

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
