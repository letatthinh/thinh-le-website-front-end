// NextJs metadata in server components
export default interface MetadataPropertyType {
  params: { textTool: string }
  searchParams: Record<string, string | string[] | undefined>
}
