import BasePropertyType from '@/types/properties/base'

export default function Heading1({ children }: BasePropertyType) {
  return <h1 className='text-3xl font-bold uppercase mb-6'>{children}</h1>
}
