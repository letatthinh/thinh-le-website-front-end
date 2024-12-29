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
import {useState} from 'react'
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
  placeholder = '',
  defaultOption = '',
  options,
  setCustomDisplayValue,
  setCustomFilterOptions
}) {
  const {
    backgroundTheme,
    borderTheme,
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)

  const [value, setValue] = useState('')
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  const filteredOptions = setCustomFilterOptions
    ? setCustomFilterOptions
    : value === ''
      ? options
      : options.filter((_option) => {
        return _option.toLowerCase().includes(value.toLowerCase())
      })

  return <Combobox
    value={selectedOption}
    onChange={(_value) => setSelectedOption(_value)}
    onClose={() => setValue('')}>
    <div className={`text-normal ${textTheme.secondaryColor}`}>
      {renderUtility.renderIfTrue(label, <label htmlFor={id}
        className={'font-medium'}>
        {label}
      </label>)}
      <div className={`relative ${label ? 'mt-2' : ''}`}>
        <ComboboxInput
          id={id}
          name={name}
          placeholder={placeholder}
          className={stringUtility.merge([
            'w-full rounded-normal py-2 px-4',
            'outline outline-1 focus:outline-2 focus:outline-offset-1',
            outlineTheme.secondaryColor400,
            outlineTheme.focus.input.accentColor800
          ])}
          displayValue={setCustomDisplayValue
            ? setCustomDisplayValue
            : (_option) => _option}
          onChange={(event) => setValue(event.target.value)} />
        <ComboboxButton className='absolute inset-y-0 right-0 px-2'>
          <ArrowDown01Icon
            className={'wh-small-2'}
            size={'100%'}
            variant={'solid'}
            type={'rounded'} />
        </ComboboxButton>
      </div>
    </div>
    <ComboboxOptions
      anchor='bottom'
      transition
      className={stringUtility.merge([
        'w-[var(--input-width)] !max-h-56 overflow-y-auto [--anchor-gap:0.25rem]',
        'border empty:invisible',
        borderTheme.secondaryColor400
      ])}>
      {filteredOptions.map((_option, _index) => (
        <ComboboxOption
          key={_index}
          value={_option}
          className={stringUtility.merge([
            'group flex items-center py-2 px-4',
            'cursor-pointer select-none',
            backgroundTheme.primaryColor,
            backgroundTheme.data.focus.accentColor800,
            textTheme.data.focus.primaryColor
          ])}>
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
        </ComboboxOption>
      ))}
    </ComboboxOptions>
  </Combobox>

}
