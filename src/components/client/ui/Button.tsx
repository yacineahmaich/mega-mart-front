import clsx from 'clsx'
import { FC } from 'react'
import loader from '../../../assets/icons/loader.svg'

type Props = {
  children?: React.ReactNode
  className?: string
  button?: object
  onClick?: () => void
  isLoading?: boolean
}

const Button: FC<Props> = ({
  children,
  className,
  button,
  onClick,
  isLoading = false,
}) => {
  return (
    <button
      {...button}
      type="submit"
      className={clsx(
        'relative py-4 text-lg w-full text-white rounded bg-gradient-to-tr bg-primary-600  hover:bg-primary-500 transition-colors  focus:ring-2 focus:ring-primary-400 focus:ring-offset-1',
        {
          'bg-opacity-90': isLoading,
        },
        className
      )}
      onClick={onClick}
      disabled={isLoading}
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
