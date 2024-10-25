import BackgroundImageLinkType from '@/types/links/background-image'
import classNameUtility from '@/utilities/class-name'
import Link from 'next/link'
import React from 'react'

const createBackgroundImageLink = (
  _backgroundImageLink: BackgroundImageLinkType,
  _openInNewTab = true
) => {
  return (
    <Link
      aria-label={_backgroundImageLink.ariaLabel}
      className={classNameUtility.mergeClassNames([
        'block p-5',
        _backgroundImageLink.backgroundImageClassName,
        'bg-contain bg-no-repeat'
      ])}
      href={_backgroundImageLink.href}
      target={_openInNewTab ? '_blank' : '_self'}
    />
  )
}

const renderByCondition = (
  _renderCondition: boolean | unknown,
  _reactElement: React.ReactNode
) => {
  if (_renderCondition) {
    return _reactElement
  }

  return undefined
}

const componentUtility = {
  createBackgroundImageLink,
  renderByCondition
}

export default componentUtility
