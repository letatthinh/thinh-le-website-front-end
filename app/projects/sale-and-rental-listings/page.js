import SaleAndRentalListingsProjectPageClient
  from '@/components/client/pages/sale-and-rental-listings'
import pageMetadataConstant from '@/constants/metadata/page'

export const metadata = {
  title: pageMetadataConstant.projects.title,
  description: pageMetadataConstant.projects.description
}

export default async function SaleAndRentalListingsProject() {
  const statesResponse = await fetch('http://127.0.0.1:8000/states')
  const citiesResponse = await fetch('http://127.0.0.1:8000/cities')
  const initialSaleListingsResponse = await fetch('http://127.0.0.1:8000/projects/sale-and-rental-listings/initial-sale-listings')
  const states = await statesResponse.json()
  const cities = await citiesResponse.json()
  const initialSaleListings = await initialSaleListingsResponse.json()

  return <>
    <SaleAndRentalListingsProjectPageClient
      states={states}
      cities={cities}
      initialSaleListings={initialSaleListings} />
  </>
}
