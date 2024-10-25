export const runTool = (
  _inputValue: string,
  _endingTextInsertionInputValue: string
): string => {
  return _inputValue
    .replaceAll('\n', `${_endingTextInsertionInputValue}\n`)
    .concat(_endingTextInsertionInputValue)
}
