import clsx from 'clsx'
import { FC } from 'react'
import loader from '../../../assets/icons/loader.svg'

type Props = {
  children?: React.ReactNode
  className?: string
  button?: object
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
  variant?: 'small' | 'medium' | 'large'
}

const Button: FC<Props> = ({
  children,
  className,
  button,
  onClick,
  isLoading = false,
  variant = 'large',
  disabled = false,
}) => {
  return (
    <button
      {...button}
      type="submit"
      className={clsx(
        'relative  w-full text-white rounded bg-gradient-to-tr bg-primary-600  hover:bg-primary-500 disabled:hover:bg-primary-600 transition-colors disabled:cursor-not-allowed  focus:ring-2 focus:ring-primary-400 focus:ring-offset-1',
        {
          'bg-opacity-90': isLoading,
          'p-4 text-lg': variant === 'large',
          'p-2.5': variant === 'medium',
          'py-2 text-sm': variant === 'small',
        },
        className
      )}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <img
          src={loader}
          alt="loader"
          className={clsx('w-6 h-6 left-1/2 animate-spin', {
            visible: isLoading,
            invisible: !isLoading,
          })}
        />
      </span>
      <span
        className={clsx({
          invisible: isLoading,
        })}
      >
        {children}
      </span>
    </button>
  )
}

export default Button
