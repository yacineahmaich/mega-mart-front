import { BoltIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { useCheckout } from '../../../context/Checkout'

const Header = () => {
  const location = useLocation()
  const { delivery, paymentMethod } = useCheckout()

  const activeStep = location.pathname.split('/')?.at(-1)

  return (
    <header className="flex justify-center w-full p-8 bg-primary-500">
      <div className="flex items-center gap-6 text-white">
        <div
          className={clsx('flex flex-col items-center justify-center', {
            'opacity-50': !delivery.isValid && activeStep !== 'checkout',
            'opacity-100': activeStep === '' || activeStep === 'checkout',
          })}
        >
          {delivery.isValid ? (
            <span>
              <CheckCircleIcon className="w-5 h-5" />
            </span>
          ) : (
            <BoltIcon
              className={clsx('w-5 h-5', {
                'w-6 h-6': activeStep === '' || activeStep === 'checkout',
              })}
            />
          )}
          <span
            className={clsx({
              'font-medium': activeStep === '' || activeStep === 'checkout',
            })}
          >
            Delevery
          </span>
        </div>
        <span>---------</span>
        <div
          className={clsx('flex flex-col items-center justify-center', {
            'opacity-50':
              !paymentMethod.isValid && activeStep !== 'payment-method',
            'opacity-100':
              paymentMethod.isValid || activeStep === 'payment-method',
          })}
        >
          {paymentMethod.isValid ? (
            <span>
              <CheckCircleIcon className="w-5 h-5" />
            </span>
          ) : (
            <BoltIcon
              className={clsx('w-5 h-5', {
                'w-6 h-6': activeStep === 'payment-method',
              })}
            />
          )}
          <span
            className={clsx({ 'font-medium': activeStep === 'payment-method' })}
          >
            Payment method
          </span>
        </div>
        <span>---------</span>
        <div
          className={clsx('flex flex-col items-center justify-center', {
            'opacity-100': activeStep === 'place-order',
            'opacity-50': activeStep !== 'place-order',
          })}
        >
          <BoltIcon
            className={clsx('w-5 h-5', {
              'w-6 h-6': activeStep === 'place-order',
            })}
          />
          <span
            className={clsx({ 'font-medium': activeStep === 'place-order' })}
          >
            Place order
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
