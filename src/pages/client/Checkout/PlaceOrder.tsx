import { Navigate } from 'react-router-dom'
import { useCheckout } from '../../../context/Checkout'
import CheckoutSummary from '../../../components/client/place-order/CheckoutSummary'
import Action from '../../../components/client/place-order/Action'
import Preveiw from '../../../components/client/place-order/Preveiw'

const PlaceOrder = () => {
  const {
    paymentMethod: { isValid },
  } = useCheckout()

  // check if previous step isValid
  if (!isValid) return <Navigate to="/checkout/payment-method" />
  return (
    <section className="relativep-3 md:p-6">
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
