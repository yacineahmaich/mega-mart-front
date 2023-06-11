import { FC } from 'react'
import { Field } from 'formik'
import ErrorMsg from '../../../pages/admin/ErrorMsg'

type Props = {
  input?: object
  label: string
  name: string
  placeholder?: string
  children?: React.ReactNode
}

const FieldGroup: FC<Props> = ({
  input,
  label,
  name,
  placeholder,
  children,
}) => {
  return (
    <div className="relative w-full">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <Field
        {...input}
        id={name}
        name={name}
        className="bg-white form-input border-gray focus:ring-primary-600 text-sm rounded-lg p-2.5 block w-full"
        placeholder={placeholder}
      >
        {children}
      </Field>
      <ErrorMsg name={name} />
    </div>
  )
}

export default FieldGroup
