import HomePage from '@/components/pages/home'
import CommonTextToolsPage from '@/components/pages/projects/tools/child-components/text-tools/child-components/common'
import PageMetadataType from '@/types/metadata/page'
import stringUtility from '@/utilities/string'
import React from 'react'
import pageMetadataConstant from '../../../../../../constants/metadata/page'

function isCommonTextToolsPage(_urlSegment: string) {
  return stringUtility.getLastSegmentFromUrl(
    pageMetadataConstant.commonTextToolsProject.path
  ) === _urlSegment
}

function getDynamicPageMetadata(
  _urlSegment: string
): PageMetadataType {
  if (isCommonTextToolsPage(_urlSegment)) {
    return pageMetadataConstant.commonTextToolsProject
  }

  return pageMetadataConstant.home
}

function getDynamicPageComponent(
  _urlSegment: string
): React.JSX.Element {
  if (isCommonTextToolsPage(_urlSegment)) {
    return <CommonTextToolsPage />
  }

  return <HomePage />
}

const dynamicTextToolPageUtility = {
  getDynamicPageMetadata,
  getDynamicPageComponent
}

export default dynamicTextToolPageUtility
