import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

type Props = {
  retry?: () => void
  message?: string
}

const Error: FC<Props> = ({ retry, message }) => {
  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="mx-auto my-6 text-center">
      <p className="mb-2 text-xl font-semibold text-danger-900">
        <ExclamationTriangleIcon className="inline w-6 mr-1" />
        <span className="font-bold">Oops !</span>
        <span className="ml-2 text-dark-500">Somthing Went Wrong !</span>
      </p>
      <p className="mb-3 text-dark-800">
        {message ? message : 'please check your connection . And try again'}
      </p>
      <div className="space-x-2">
        <button
          className="px-6 py-1 text-white rounded-full bg-primary-600"
          onClick={reload}
        >
          reload
        </button>
        {retry && (
          <button
            className="px-6 py-1 border rounded-full text-primary-600 border-primary-600"
            onClick={retry}
          >
            try again
          </button>
        )}
      </div>
    </div>
  )
}

export default Error
