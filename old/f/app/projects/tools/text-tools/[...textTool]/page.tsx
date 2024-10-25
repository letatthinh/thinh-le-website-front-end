import dynamicTextToolPageUtility
  from '@/app/projects/tools/text-tools/[...textTool]/utility'
import MetadataPropertyType from '@/types/properties/metadata'
import { Metadata } from 'next'

export async function generateMetadata(
  { params : parameters }: MetadataPropertyType
): Promise<Metadata> {
  // textTool[0] is the path right after textTool, ex: common
  const dynamicPageMetadata = dynamicTextToolPageUtility
    .getDynamicPageMetadata(parameters.textTool[0])

  return {
    title: dynamicPageMetadata.title,
    description: dynamicPageMetadata.description
  }
}

export default async function Page(
  { params : parameters }: MetadataPropertyType
) {
  // textTool[0] is the path right after textTool, ex: common
  return dynamicTextToolPageUtility
    .getDynamicPageComponent(parameters.textTool[0])
}
