import ProjectPageContentSectionClient
  from '@/components/client/content-section/pages/projects'
import pageMetadataConstant from '@/constants/metadata/page'

export const metadata = {
  title: pageMetadataConstant.projects.title,
  description: pageMetadataConstant.projects.description
}

export default function SaleAndRentalListingsProject() {
  return <>
    <ProjectPageContentSectionClient />
    <section></section>
  </>
}
