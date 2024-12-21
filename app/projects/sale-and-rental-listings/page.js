import SaleAndRentalListingsProjectPageClient
  from '@/components/client/pages/sale-and-rental-listings'
import pageMetadataConstant from '@/constants/metadata/page'

export const metadata = {
  title: pageMetadataConstant.projects.title,
  description: pageMetadataConstant.projects.description
}

export default function SaleAndRentalListingsProject() {
  return <>
    <SaleAndRentalListingsProjectPageClient />
  </>
}
