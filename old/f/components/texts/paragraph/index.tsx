import BasePropertyType from '@/types/properties/base'

export default function Paragraph({ className, children }: BasePropertyType) {
  return <p className={`${className} mb-1.5`}>{children}</p>
}
