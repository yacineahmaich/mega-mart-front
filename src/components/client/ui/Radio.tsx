import { Field } from 'formik'
import { FC } from 'react'

type Props = {
  label: string
  name: string
  value: number | string
  input?: object
}

const Radio: FC<Props> = ({ label, name, value, input }) => {
  return (
    <label
      className="flex items-center gap-3 cursor-pointer"
      htmlFor={label.toLocaleLowerCase()}
    >
      <Field
        {...input}
        type="radio"
        name={name}
        id={label.toLocaleLowerCase()}
        value={value}
        className="form-radio text-primary-500 focus:outline-primary-500"
      />
      <span className="font-medium text-dark-500">{label}</span>
    </label>
  )
}

export default Radio
