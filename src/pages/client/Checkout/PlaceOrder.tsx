import { Navigate } from 'react-router-dom'
import { useCheckout } from '../../../context/Checkout'
import { BoltIcon } from '@heroicons/react/24/outline'
import CheckoutSummary from '../../../components/client/place-order/CheckoutSummary'
import Action from '../../../components/client/place-order/Action'
import Preveiw from '../../../components/client/place-order/Preveiw'

const PlaceOrder = () => {
  // check if previous step isValid
  const {
    delevery: { isValid },
  } = useCheckout()
  if (!isValid) return <Navigate to=".." />

  return (
    <section className="relativep-3 md:p-6">
      <div>
        <h2 className="block p-2 mb-6 font-bold border w-fit text-primary-500">
          <div className="space-x-2">
            <BoltIcon className="inline w-6 h-6" />
            <span>Step 2 / 3</span>
            <span className="text-sm font-medium text-dark-500">
              | Place Order
            </span>
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 ">
        <div>
          <CheckoutSummary />
          <Action />
        </div>
        <div>
          <Preveiw />
        </div>
      </div>
    </section>
  )
}

export default PlaceOrder
