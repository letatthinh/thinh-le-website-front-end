import renderUtility from '@/utilities/render'
import stringUtility from '@/utilities/string'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react'
import {ArrowDown01Icon, Tick02Icon} from '@hugeicons/react'
import {useCallback, useMemo} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme,
    outlineTheme: (_state) => _state.outlineTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function ComboBoxClient({
  containerClassName,
  id,
  isReadonly = false, // Use this to make it look like a select
  isRequired = false,
  isValidationEnabled = false, // If true, it will apply default built-in validation, and have :invalid state
  isVirtualScrolling = false, // Should enable when having a large options
  label,
  name,
  onComboBoxClose,
  onOptionChange,
  onValueChange,
  option,
  options,
  optionsClassName,
  placeholder = 'Please select',
  validationMessage = 'This is a required field',
  value // value accepted by the input
}) {
  const {
    backgroundTheme,
    borderTheme,
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)

  const filteredOptions = useMemo(() => {
    return value === ''
      ? options
      : options.filter((_option) => {
        return _option.toLowerCase().includes(value.toLowerCase())
      })
  }, [options, value])

  const renderComboboxOptionContent = useCallback((_option) => {
    return <>
      <div className={'grow'}>
        {_option}
      </div>
      <Tick02Icon
        className={stringUtility.merge([
          'shrink-0 wh-normal invisible group-data-[selected]:visible'
        ])}
        size={'100%'}
        variant={'solid'}
        type={'rounded'} />
    </>
  }, [])

  const renderVirtualScrollingComboboxOption = useCallback((_option) => {
    return <ComboboxOption
      value={_option}
      className={stringUtility.merge([
        'group flex items-center w-full py-2 px-4',
        'cursor-pointer select-none',
        backgroundTheme.primaryColor,
        backgroundTheme.data.focus.accentColor700,
        textTheme.data.focus.primaryColor
      ])}>
      {renderComboboxOptionContent(_option)}
    </ComboboxOption>
  }, [
    backgroundTheme.data.focus.accentColor700,
    backgroundTheme.primaryColor,
    renderComboboxOptionContent,
    textTheme.data.focus.primaryColor
  ])

  const renderComboboxOption = useCallback((_option, _index) => {
    return <ComboboxOption
      key={_index}
      value={_option}
      className={stringUtility.merge([
        'group flex items-center py-2 px-4',
        'cursor-pointer select-none',
        backgroundTheme.primaryColor,
        backgroundTheme.data.focus.accentColor700,
        textTheme.data.focus.primaryColor
      ])}>
      {renderComboboxOptionContent(_option)}
    </ComboboxOption>
  }, [
    backgroundTheme.data.focus.accentColor700,
    backgroundTheme.primaryColor,
    renderComboboxOptionContent,
    textTheme.data.focus.primaryColor
  ])

  return <Combobox
    value={option}
    virtual={isVirtualScrolling
      ? {options: filteredOptions}
      : undefined}
    onChange={onOptionChange}
    onClose={onComboBoxClose}>
    <div className={containerClassName}>
      {renderUtility.renderIfTrue(label, <label htmlFor={id}
        className={'font-medium'}>
        {label}{isRequired && !isReadonly ? ' (*)' : ''}
      </label>)}
      <div className={stringUtility.merge([
        'relative peer',
        label ? 'mt-2' : ''
      ])}>
        <ComboboxInput
          readOnly={isReadonly}
          id={id}
          name={name}
          required={isRequired}
          placeholder={placeholder}
          className={stringUtility.merge([
            isReadonly ? 'cursor-default' : '',
            'w-full rounded-normal py-2 pl-4',
            'outline outline-1 focus:outline-2 focus:outline-offset-1',
            isValidationEnabled
              ? stringUtility.merge([
                'invalid:outline-2 invalid:outline-offset-1',
                outlineTheme.invalid600
              ])
              : '',
            outlineTheme.secondaryColor300,
            outlineTheme.focus.accentColor700
          ])}
          displayValue={(_option) => _option}
          onChange={onValueChange} />
        <ComboboxButton
          className={stringUtility.merge([
            'absolute inset-y-0 right-0 pr-4',
            isReadonly ? 'inset-x-0' : ''
          ])}>
          <ArrowDown01Icon
            className={'wh-small-2 ml-auto'}
            size={'100%'}
            variant={'solid'}
            type={'rounded'} />
        </ComboboxButton>
      </div>
      {renderUtility.renderIfTrue(isValidationEnabled, <p
        className={stringUtility.merge([
          'mt-2 text-small-1 hidden peer-has-[:invalid]:block',
          textTheme.invalid600
        ])}>
        {validationMessage}
      </p>)}
    </div>
    <ComboboxOptions
      anchor='bottom'
      transition
      className={stringUtility.merge([
        'w-[var(--input-width)] !max-h-56 overflow-y-auto [--anchor-gap:0.25rem]',
        'border empty:invisible',
        borderTheme.secondaryColor300,
        optionsClassName
      ])}>
      {isVirtualScrolling
        ? ({option: _option}) => renderVirtualScrollingComboboxOption(_option)
        : filteredOptions.map((_option, _index) =>
          renderComboboxOption(_option, _index)
        )}
    </ComboboxOptions>
  </Combobox>
}
