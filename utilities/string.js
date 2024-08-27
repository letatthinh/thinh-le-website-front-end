/* Merge strings ignoring null and undefined elements */
const merge = (_strings, _separator = ' ') => {
  if (!_strings) {
    return ''
  }

  let result = _strings[0] ? _strings[0] : ''

  for (let index = 1; index < _strings.length; index++) {
    if (index === 1 && !_strings[0]) {
      result += _strings[index]
    } else if (_strings[index]) {
      result += _separator + _strings[index]
    }
  }

  return result
}

const stringUtility = {
  merge
}

export default stringUtility
