'use client'
import SaleAndRentalListingsContext from '@/contexts/sale-and-rental-listings'
import stringUtility from '@/utilities/string'
import {Home05Icon} from '@hugeicons/react'
import L from 'leaflet'
import React, {useContext, useEffect, useRef} from 'react'
import 'leaflet/dist/leaflet.css'
import ReactDOMServer from 'react-dom/server'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

// This component is only used in sale and rental listings project
export default function MapClient({className}) {
  const {
    backgroundTheme,
    textTheme
  } = useSelector(selectTheme)

  const mapContainerRef = useRef(null)
  const {listings} = useContext(SaleAndRentalListingsContext)

  useEffect(() => {
    /* Initialize the map */
    const map = L
      .map(mapContainerRef.current)

    /* Add tile */
    const creditLink = 'http://www.openstreetmap.org/copyright'

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: `&copy; <a href="${creditLink}">OpenStreetMap</a>`
    }).addTo(map)

    const bounds = L.latLngBounds() // Create a bounds object to hold all marker positions

    /* Add markers */
    listings.forEach((_listing) => {
      const marker = L.marker([_listing.latitude, _listing.longitude], {
        icon: L.divIcon({
          html: ReactDOMServer.renderToStaticMarkup(
            <div className={stringUtility.merge([
              'w-fit p-1.5 rounded-full',
              backgroundTheme.accentColor700
            ])}>
              <Home05Icon
                className={`wh-normal ${textTheme.primaryColor}`}
                size={'100%'}
                variant={'solid'}
                type={'rounded'} />
            </div>
          ),
          className: 'custom-icon'
        })
      })

      // Add marker to the map
      marker
        .addTo(map)
        .bindPopup(`<strong>
                ${_listing.formattedAddress}
            </strong>
            <br />
            Price: $${_listing.price}`)
      /*.on("click", () => {
        const formattedHistory = Object.entries(house.history).map(([date, details]) => ({
          date,
          ...details,
        }));
        setSelectedHistory(formattedHistory);
      });*/

      bounds.extend([_listing.latitude, _listing.longitude]) // Extend bounds to include this marker's position
    })

    // Adjust the map view to fit the bounds
    if (bounds.isValid()) {
      map.fitBounds(bounds, {padding: [20, 20]})
    }

    // Cleanup on unmount
    return () => {
      map.remove()
    }
  }, [
    backgroundTheme.accentColor700,
    backgroundTheme.hover.accentColor700,
    backgroundTheme.secondaryColor,
    listings,
    textTheme
  ])

  return <div
    ref={mapContainerRef}
    className={stringUtility.merge([
      'min-h-120 z-10',
      className
    ])}>
  </div>
}
