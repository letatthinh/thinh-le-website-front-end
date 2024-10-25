import BasePropertyType from '@/types/properties/base'

export default function Heading3({ children }: BasePropertyType) {
  return <h3 className='text-xl my-6'>{children}</h3>
}
