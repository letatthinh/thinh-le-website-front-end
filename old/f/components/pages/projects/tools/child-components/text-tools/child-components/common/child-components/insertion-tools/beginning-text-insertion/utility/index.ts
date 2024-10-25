export const runTool = (
  _inputValue: string,
  _beginningTextInsertionInputValue: string
): string => {
  return _beginningTextInsertionInputValue
    .concat(_inputValue)
    .replaceAll('\n', `\n${_beginningTextInsertionInputValue}`)
}
