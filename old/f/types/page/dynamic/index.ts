import PageMetadataType from '@/types/metadata/page'
import React from 'react'

export default interface DynamicPageType {
  metadata: PageMetadataType,
  component: React.JSX.Element
}
