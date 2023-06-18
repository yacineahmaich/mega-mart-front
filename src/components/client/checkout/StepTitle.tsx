import { BoltIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'

function StepTitle() {
  const location = useLocation()

  const activeStep = location.pathname.split('/')?.at(-1)

  let title = 'Delevery information'
  let step = 1

  if (activeStep === '') {
    title = 'Delevery information'
    step = 1
  } else if (activeStep === 'payment-method') {
    title = 'Payment method'
    step = 2
  } else if (activeStep === 'place-order') {
    title = 'Place order'
    step = 3
  }

  return (
    <h2 className="block p-2 mx-auto mb-2 font-bold w-fit text-primary-500">
      <div className="space-x-2">
        <BoltIcon className="inline w-6 h-6" />
        <span>Step {step} / 3</span>
        <span className="text-sm font-medium text-dark-500">| {title}</span>
      </div>
    </h2>
  )
}

export default StepTitle
