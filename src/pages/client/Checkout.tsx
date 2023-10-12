import { Navigate } from 'react-router'
import Delivery from '../../components/client/checkout/Delivery'
import PaymentMethod from '../../components/client/checkout/PaymentMethod'
import PlaceOrder from '../../components/client/checkout/PlaceOrder'
import Stepper from '../../components/client/checkout/Stepper'
import { useGetUser } from '../../features/auth/useGetUser'
import useCartStore from '../../store/cart'
import useCheckoutStore from '../../store/checkout'

const CheckoutLayout = () => {
  const { items } = useCartStore()
  const { steps } = useCheckoutStore()

  const { data: user } = useGetUser()
  if (!user) return <Navigate to="/account/login" replace />

  // check if cart isvalid (not empty)
  const cartIsValid = Object.entries(items).length > 0
  if (!cartIsValid) return <Navigate to=".." />

  return (
    <div>
      <div className='bg-warning-400 text-center py-2'>
        <p className='italic text-zinc-500 font-semibold'>Test payments with Stripe test card 👇️</p>
        <span className='font-medium text-primary-500'>4242 4242 4242 4242</span>
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

export default CheckoutLayout
