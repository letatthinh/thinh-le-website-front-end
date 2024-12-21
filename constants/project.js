import pageMetadataConstant from './metadata/page'

const saleAndRentalListings = {
  path: pageMetadataConstant.saleAndRentalListingsProject.path,
  backgroundImageClass: 'bg-sale-and-rental-listings',
  dateCreated: '2024-12-17',
  tags: ['Data visualization'],
  title: pageMetadataConstant.saleAndRentalListingsProject.title,
  description: pageMetadataConstant.saleAndRentalListingsProject.description,
  author: 'Thinh Le'
}

const allProjects = [
  saleAndRentalListings
]

const projectConstant = {
  saleAndRentalListings,
  allProjects
}

export default projectConstant
