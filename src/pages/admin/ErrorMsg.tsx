import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { ErrorMessage } from 'formik'
import { FC } from 'react'

type Props = {
  name: string
  className?: string
  position?: 'bottom' | 'right'
}

const ErrorMsg: FC<Props> = ({ name, className, position = 'bottom' }) => {
  return (
    <ErrorMessage
      name={name}
      render={msg => (
        <p
          className={clsx(
            ' text-xs font-bold duration-200  animate-in text-danger-400',
            {
              'slide-in-from-top-1 mt-1 top-full absolute':
                position === 'bottom',
              'slide-in-from-left-1 ml-3 relative': position === 'right',
            },
            className
          )}
        >
          <ExclamationTriangleIcon className="inline w-5 h-5" />
          &nbsp;
          <span>{msg}</span>
        </p>
      )}
    />
  )
}

export default ErrorMsg
