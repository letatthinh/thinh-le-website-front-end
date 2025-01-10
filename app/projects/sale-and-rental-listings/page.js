import SaleAndRentalListingsProjectPageClient
  from '@/components/client/pages/sale-and-rental-listings'
import pageMetadataConstant from '@/constants/metadata/page'
import fileUtility from '@/utilities/file'

export const metadata = {
  title: pageMetadataConstant.projects.title,
  description: pageMetadataConstant.projects.description
}

export default async function SaleAndRentalListingsProject() {
  const states = await fileUtility.readLocalCsv('data/states.csv')
  const cities = await fileUtility.readLocalCsv('data/cities.csv')

  return <>
    <SaleAndRentalListingsProjectPageClient
      states={states}
      cities={cities} />
  </>
}
