import HomePageHeroSectionClient
  from '@/components/client/page/home/hero-section'
import pageMetadataConstant from '@/constants/metadata/page'

// [Tip]: metadata is used for generating page metadata only in server side
export const metadata = {
  title: pageMetadataConstant.home.title,
  description: pageMetadataConstant.home.description
}

// [Tip]: home page server component must be always within the app folder
// [Tip]: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`
export default function Home() {
  return <HomePageHeroSectionClient />
}
