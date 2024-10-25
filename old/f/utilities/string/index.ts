const isEmpty = (_string: string | undefined | null) => {
  return !!_string
}

const sliceOverflowStringAndReplaceWithDots = (
  _string: string | undefined,
  _sliceLength: number
) => {
  if (!_string) {
    return ''
  }

  if (_string.length <= _sliceLength) {
    return _string
  }

  return `${_string.slice(0, _sliceLength)}...`
}

const toString = (_parameter: unknown) => {
  if (!_parameter) {
    return ''
  }

  return typeof _parameter === 'string' ? _parameter : _parameter.toString()
}

const getLastSegmentFromUrl = (_url: string) => {
  return _url.substring(_url.lastIndexOf('/') + 1)
}

const stringUtility = {
  isEmpty,
  sliceOverflowStringAndReplaceWithDots,
  toString,
  getLastSegmentFromUrl
}

export default stringUtility
