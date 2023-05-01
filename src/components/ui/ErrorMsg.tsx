import { FC } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  message: string
  actionName: string
  actionFn: () => void
}

const ErrorMsg: FC<Props> = ({ message, actionName, actionFn }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 px-4 py-1 rounded-lg w-fit border-danger-600">
      <h2 className="flex items-center gap-2 font-semibold text-md text-danger-600">
        <ExclamationCircleIcon className="w-6 h-6 " />
        <span>Error</span>
      </h2>

      <p className="text-sm font-semibold">{message}</p>

      <button
        className="px-6 py-2 text-sm font-semibold transition-colors border-2 rounded border-dark-600 hover:bg-dark-600 hover:text-white text-dark-600"
        onClick={actionFn}
      >
        {actionName}
      </button>
    </div>
  )
}

export default ErrorMsg
