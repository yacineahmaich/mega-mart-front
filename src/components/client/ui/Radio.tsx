import clsx from 'clsx'
import { Field } from 'formik'
import { FC } from 'react'

type Props = {
  label: string
  name: string
  value: number | string
  input?: object
  disabled?: boolean
}

const Radio: FC<Props> = ({ label, name, value, input, disabled = false }) => {
  return (
    <label
      className={'flex items-center gap-3 cursor-pointer'}
      htmlFor={label.toLocaleLowerCase()}
    >
      <Field
        {...input}
        type="radio"
        name={name}
        id={label.toLocaleLowerCase()}
        value={value}
        className={clsx(
          'form-radio checked:bg-primary-500 checked:hover:bg-primary-500 checked:focus:bg-primary-500 focus:outline-primary-500',
          {
            'border-slate-400': disabled,
          }
        )}
        disabled={disabled}
      />
      <span
        className={clsx('font-medium text-dark-500', {
          'text-slate-400': disabled,
        })}
      >
        {label}
      </span>
    </label>
  )
}

export default Radio
