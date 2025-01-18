import renderUtility from '@/utilities/render'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    outlineTheme: (_state) => _state.outlineTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function NumberInputClient({
  containerClassName,
  id,
  inputClassName,
  isValidationEnabled = false, // If true, it will apply validation by default, and may have invalid status
  label,
  max,
  min,
  name,
  onValueChange,
  placeholder = 'Please input',
  prefix, // a jsx element
  validationMessage = 'This is a required field',
  value
}) {
  const {
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)

  return <div className={containerClassName}>
    {renderUtility.renderIfTrue(
      label, <label htmlFor={id}
        className={'font-medium'}>
        {label}
      </label>)}
    <div className={stringUtility.merge([
      label ? 'mt-2' : '',
      'flex rounded-normal py-2 px-4 peer',
      'outline outline-1 has-[input:focus-within]:outline-2',
      'has-[input:focus-within]:outline-offset-1',
      isValidationEnabled
        ? stringUtility.merge([
          'has-[input:invalid]:outline-2 has-[input:invalid]:outline-offset-1',
          outlineTheme.has.input.invalid
        ])
        : '',
      outlineTheme.secondaryColor300,
      outlineTheme.has.input.focusWithin.accentColor700
    ])}>
      {prefix}
      <input
        type={'number'}
        value={value}
        id={id}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        className={stringUtility.merge([
          'w-full focus:outline-0',
          inputClassName
        ])}
        onChange={onValueChange} />
    </div>
    {renderUtility.renderIfTrue(isValidationEnabled, <p
      className={stringUtility.merge([
        'mt-2 text-small-1 hidden peer-has-[input:invalid]:block',
        textTheme.invalid
      ])}>
      {validationMessage}
    </p>)}
  </div>
}
