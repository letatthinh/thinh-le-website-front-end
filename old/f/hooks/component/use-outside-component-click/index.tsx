import { useEffect, useRef } from 'react'

export default function useOutsideComponentClick(callback: () => void) {
  const reference = useRef<HTMLElement>(null)

  useEffect(() => {
    const onPageClick = (event: MouseEvent) => {
      if (reference.current && event.target) {
        if (!reference.current.contains(event.target as HTMLElement)) {
          callback()
        }
      }
    }

    document.addEventListener('click', onPageClick)

    return () => {
      document.removeEventListener('click', onPageClick)
    }
  }, [callback])

  return reference
}
