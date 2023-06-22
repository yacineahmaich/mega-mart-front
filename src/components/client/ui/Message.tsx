import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  message: string
  className?: string
}

const Message: FC<Props> = ({ message, className }) => {
  return (
    <div className={clsx('p-2 bg-warning-400', className)}>
      <p className="text-sm font-semibold text-danger-500">{message}</p>
    </div>
  )
}

export default Message
