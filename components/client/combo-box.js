'use client'
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
import {useCallback, useEffect, useMemo, useState} from 'react'
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
  label,
  id,
  name,
  isRequired = false,
  // If true, it will apply validation by default, and may have invalid status
  enableValidation = false,
  validationMessage = 'This is a required field',
  placeholder = 'Please select',
  options,
  defaultOption = '',
  isVirtualScrolling = false,
  comboBoxClassName,
  onOptionChange,
  setCustomDisplayValue,
  setCustomFilterOptions
}) {
  const {
    backgroundTheme,
    borderTheme,
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)

  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  const filteredOptions = useMemo(() => {
    return setCustomFilterOptions
      ? setCustomFilterOptions
      : inputValue === ''
        ? options
        : options.filter((_option) => {
          return _option.toLowerCase().includes(inputValue.toLowerCase())
        })
  }, [options, setCustomFilterOptions, inputValue])

  useEffect(() => {
    if (!defaultOption) {
      setSelectedOption('')
    }
  }, [defaultOption, options])

  const onComboBoxValueChange = (_value) => {
    setSelectedOption(_value)

    if (onOptionChange) {
      onOptionChange(_value)
    }
  }

  const onInputValueChange = (_event) => {
    setInputValue(_event.target.value)
  }

  const renderComboboxOptionContent = useCallback((_option) => {
    return <>
      <div className={stringUtility.merge([
        'grow text-normal'
      ])}>
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
        backgroundTheme.data.focus.accentColor800,
        textTheme.data.focus.primaryColor
      ])}>
      {renderComboboxOptionContent(_option)}
    </ComboboxOption>
  }, [
    backgroundTheme.data.focus.accentColor800,
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
        backgroundTheme.data.focus.accentColor800,
        textTheme.data.focus.primaryColor
      ])}>
      {renderComboboxOptionContent(_option)}
    </ComboboxOption>
  }, [
    backgroundTheme.data.focus.accentColor800,
    backgroundTheme.primaryColor,
    renderComboboxOptionContent,
    textTheme.data.focus.primaryColor
  ])

  return <Combobox
    value={selectedOption}
    virtual={isVirtualScrolling
      ? {options: filteredOptions}
      : undefined}
    onChange={onComboBoxValueChange}
    onClose={() => setInputValue('')}>
    <div className={stringUtility.merge([
      textTheme.secondaryColor,
      comboBoxClassName
    ])}>
      {renderUtility.renderIfTrue(label, <label htmlFor={id}
        className={'font-medium'}>
        {label}
      </label>)}
      <div className={`relative peer ${label ? 'mt-2' : ''}`}>
        <ComboboxInput
          id={id}
          name={name}
          required={isRequired}
          placeholder={placeholder}
          className={stringUtility.merge([
            'w-full rounded-normal py-2 px-4',
            'outline outline-1 focus:outline-2 focus:outline-offset-1',
            enableValidation
              ? stringUtility.merge([
                'invalid:outline-2 invalid:outline-offset-1',
                outlineTheme.invalid
              ])
              : '',
            outlineTheme.secondaryColor400,
            outlineTheme.focus.input.accentColor800
          ])}
          displayValue={setCustomDisplayValue
            ? setCustomDisplayValue
            : (_option) => _option}
          onChange={onInputValueChange} />
        <ComboboxButton className='absolute inset-y-0 right-0 px-2'>
          <ArrowDown01Icon
            className={'wh-small-2'}
            size={'100%'}
            variant={'solid'}
            type={'rounded'} />
        </ComboboxButton>
      </div>
      {renderUtility.renderIfTrue(enableValidation, <p
        className={stringUtility.merge([
          'mt-2 text-small-1 hidden peer-has-[:invalid]:block',
          textTheme.invalid
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
        borderTheme.secondaryColor400
      ])}>
      {isVirtualScrolling
        ? ({option: _option}) => renderVirtualScrollingComboboxOption(_option)
        : filteredOptions.map((_option, _index) =>
          renderComboboxOption(_option, _index)
        )}
    </ComboboxOptions>
  </Combobox>
}
