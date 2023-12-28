import { Navigate } from 'react-router'
import Delivery from '../components/checkout/Delivery'
import PaymentMethod from '../components/checkout/PaymentMethod'
import PlaceOrder from '../components/checkout/PlaceOrder'
import Stepper from '../components/checkout/Stepper'
import useCartStore from '../store/cart'
import useCheckoutStore from '../store/checkout'
import { useGetUser } from '../services/auth/useGetUser'

const Checkout = () => {
  const { items } = useCartStore()
  const { steps } = useCheckoutStore()

  const { data: user } = useGetUser()
  if (!user) return <Navigate to="/account/login" replace />

  // check if cart isvalid (not empty)
  const cartIsValid = Object.entries(items).length > 0
  if (!cartIsValid) return <Navigate to=".." />

  return (
    <div>
      <div className="py-2 text-center bg-warning-400">
        <p className="italic font-semibold text-zinc-500">
          Test payments with Stripe test card 👇️
        </p>
        <span className="font-medium text-primary-500">
          4242 4242 4242 4242
        </span>
      </div>
      <Stepper
        activeStep={steps.active}
        changeActiveStep={steps.changeActiveStep}
      />
      <div className="container mx-auto mb-6">
        {steps.active === 0 && <Delivery />}
        {steps.active === 1 && <PaymentMethod />}
        {steps.active === 2 && <PlaceOrder />}
      </div>
    </div>
  )
}

export default Checkout
