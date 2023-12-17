import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

type Props = {
  error: {
    errors?: object
  }
}

const FormErrors: FC<Props> = ({ error }) => {
  return (
    <div>
      {error?.errors && (
        <ul className="p-4 mb-4 border rounded-lg border-danger-700">
          {Object.values(error.errors)
            .flat()
            .map((err: string, idx) => (
              <li key={idx} className="text-sm font-semibold text-danger-300">
                <ExclamationTriangleIcon className="inline w-5 h-5" />
                &nbsp;<span>{err}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default FormErrors
