import clsx from 'clsx'
import { FC } from 'react'
type Props = {
  children?: React.ReactNode
  className?: string
  variant?: 'success' | 'danger' | 'regular'
}
const Badge: FC<Props> = ({ children, className, variant = 'regular' }) => {
  return (
    <span
      className={clsx(
        'px-6 py-0.5 lowercase font-medium rounded-full text-xs whitespace-nowrap',
        {
          'bg-green-100 text-green-500': variant === 'success',
          'bg-red-100 text-red-500': variant === 'danger',
          'text-dark-500 bg-gray': variant === 'regular',
        },
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
