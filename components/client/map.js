'use client'
import L from 'leaflet'
import React, {useEffect, useRef} from 'react'
import 'leaflet/dist/leaflet.css'

export default function MapClient({}) {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13)

    // Cleanup on unmount
    return () => {
      map.remove()
    }
  }, [])

  return <div
    ref={mapContainerRef}
    className={'h-96 w-full z-20'}>
  </div>

}
