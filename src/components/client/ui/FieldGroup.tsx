import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { FC } from 'react'

type Props = {
  input?: object
  label: string
  name: string
  placeholder?: string
  children?: React.ReactNode
  disabled?: boolean
  variant?: 'small' | 'medium' | 'large'
}

const FieldGroup: FC<Props> = ({
  input,
  label,
  name,
  placeholder,
  children,
  disabled,
  variant = 'large',
}) => {
  return (
    <div className="relative mb-7">
      <label
        className={clsx('block mb-2 font-bold w-fit text-dark-500', {
          'text-sm': variant === 'small',
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        {...input}
        id={name}
        name={name}
        className={clsx(
          'block w-full  rounded-md focus:ring-2 focus:ring-primary-500 border-slate-400 focus:border-transparent form-input',
          {
            'py-5': variant === 'large',
            'py-3': variant === 'medium',
            'py-2': variant === 'small',
          }
        )}
        placeholder={placeholder}
        autoComplete="on"
        disabled={disabled}
      >
        {children}
      </Field>
      <ErrorMessage
        name={name}
        render={msg => (
          <p className="absolute mt-1 text-xs font-semibold top-full text-danger-400 animate-in slide-in-from-top-1">
            <ExclamationTriangleIcon className="inline w-5 h-5" />
            &nbsp;
            <span>{msg}</span>
          </p>
        )}
      />
    </div>
  )
}

export default FieldGroup
