import ProjectPageContentSectionClient
  from '@/components/client/content-sections/pages/projects'
import ProjectsPageHeroSectionClient
  from '@/components/client/hero-sections/pages/projects'
import pageMetadataConstant from '@/constants/metadata/page'

export const metadata = {
  title: pageMetadataConstant.projects.title,
  description: pageMetadataConstant.projects.description
}

export default function Projects() {
  return <>
    <ProjectsPageHeroSectionClient />
    <ProjectPageContentSectionClient />
  </>
}
