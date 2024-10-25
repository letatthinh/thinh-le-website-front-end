import PrivateImageGalleryPage from '@/components/pages/projects/private-image-gallery'
import pageMetadataConstant from '../../../constants/metadata/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: pageMetadataConstant.privateImageGalleryProject.title,
  description: pageMetadataConstant.privateImageGalleryProject.description
}

export default function Page() {
  return <PrivateImageGalleryPage />
}
