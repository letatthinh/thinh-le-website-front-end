export const runTool = (_inputValue: string): string => {
  const numberOfTextLines = _inputValue.trim().split('\n').length ?? 1

  return numberOfTextLines > 1 ? _inputValue.replaceAll('\n', '') : _inputValue
}
