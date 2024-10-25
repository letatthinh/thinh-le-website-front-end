import BasePropertyType from '@/types/properties/base'

export default function Heading2({ children }: BasePropertyType) {
  return <h2 className='text-2xl my-6'>{children}</h2>
}
