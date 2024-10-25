'use client'
import ApiClient from '@/app/api'
import { GoogleDriveImageResponseDto } from '@/app/api/google-service'
import SectionContainer from '@/components/layouts/container/section'
import ContentCardsSection from '@/components/layouts/section/content-cards'
import Heading1 from '@/components/texts/h1'
import GapSize from '@/types/enums/gap-size'

import classNameUtility from "@/utilities/class-name"
import contentCardUtility from "@/utilities/content-card"
import gapUtility from "@/utilities/gap"
import screenUtility from "@/utilities/screen"
import stringUtility from '@/utilities/string'
import Image from 'next/image'
import {useCallback, useEffect, useRef, useState} from 'react'

export default function PrivateImageGalleryPage() {
  const [
    googleDriveImages,
    setGoogleDriveImages
  ] = useState<GoogleDriveImageResponseDto[]>([])
  const [
    contentCardsSectionWidth,
    setContentCardsSectionWidth
  ] = useState<number | undefined>(undefined)
  const [
    screenWidthBreakpoint,
    setScreenWidthBreakpoint
  ] = useState<number | undefined>(undefined)
  const contentCardsSectionReference = useRef<HTMLElement>(null)
  const imageArticleReference = useRef<HTMLElement>(null)
  const contentCardsSectionId = 'image-gallery'
  const numberOfContentCardsSectionColumns = 5
  const gapSize = GapSize.Small

  useEffect(() => {
    const getGoogleDriveImages = async () => {
      // [Tip] Use api client
      const googleServiceApiClient = new ApiClient().googleServiceApiClient
      const googleDriveImageResponseDtos
        = await googleServiceApiClient.getGoogleDriveImages()

      setGoogleDriveImages(googleDriveImageResponseDtos)
    }

    getGoogleDriveImages()
  }, [])

  useEffect(() => {
    const contentCardsSectionResizeObserver = new ResizeObserver(
      (_entries) => {
        for (const entry of _entries) {
          if (entry.target.id == contentCardsSectionId) {
            const newContentCardsSectionWidth = _entries[0]
              .target.getBoundingClientRect().width

            if (Number.isInteger(newContentCardsSectionWidth)) {
              setContentCardsSectionWidth(newContentCardsSectionWidth)
            }
          }

          if (entry.target.tagName === 'BODY') {
            const newScreenWidthBreakpoint = screenUtility
              .getScreenBreakpoint(window.innerWidth)

            if (newScreenWidthBreakpoint != screenWidthBreakpoint) {
              setScreenWidthBreakpoint(newScreenWidthBreakpoint)
            }
          }
        }
      }
    )

    if (contentCardsSectionReference.current) {
      contentCardsSectionResizeObserver.observe(
        contentCardsSectionReference.current
      )
    }

    contentCardsSectionResizeObserver.observe(
      document.body
    )

    return () => {
      contentCardsSectionResizeObserver.disconnect()
    }
  }, [screenWidthBreakpoint])
  
  const renderImages = useCallback(() => {
    return googleDriveImages.map((_googleDriveImage) => {
      const numberOfGridColumns = contentCardUtility
        .calculateNumberOfGridColumnsByScreenWidthBreakpoint(
          screenWidthBreakpoint ?? 0,
          numberOfContentCardsSectionColumns)
      const gapWidth = gapUtility.getGapWidthBySize(gapSize)
      const totalGapWidth = (numberOfGridColumns - 1) * gapWidth
      const gridColumnWidth = ((contentCardsSectionWidth ?? 0) - totalGapWidth)
        / numberOfGridColumns
      const gridColumnHeight = gridColumnWidth / 3 * 4
      const columnSpanClassName = _googleDriveImage.width!
        > _googleDriveImage.height!
        ? 'col-span-2'
        : ''

      return <article
        key={_googleDriveImage.fileId}
        className={classNameUtility.mergeClassNames([
          'relative',
          columnSpanClassName
        ])}
        ref={imageArticleReference}
        style={{height: gridColumnHeight}}
      >
        <Image
          src={stringUtility.toString(_googleDriveImage.source)}
          fill
          alt={stringUtility.toString(_googleDriveImage.name)}
          style={{objectFit: "cover"}}
        />
      </article>
    })
  }, [
    screenWidthBreakpoint,
    contentCardsSectionWidth,
    googleDriveImages,
    gapSize
  ])

  return <>
    <SectionContainer>
      <Heading1>PRIVATE IMAGE GALLERY</Heading1>
      <ContentCardsSection
        id={contentCardsSectionId}
        numberOfColumns={numberOfContentCardsSectionColumns}
        gapSize={gapSize}
        reference={contentCardsSectionReference}
        className={'grid-flow-row-dense justify-stretch'}
      >
        {renderImages()}
      </ContentCardsSection>
    </SectionContainer>
  </>
}