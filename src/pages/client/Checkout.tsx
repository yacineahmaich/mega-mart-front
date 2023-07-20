import { Navigate } from 'react-router'
// import CheckoutProvider from '../../context/Checkout/CheckoutProvider'
import { useGetUser } from '../../features/auth/useGetUser'
import { useCart } from '../../context/Cart'
import Delivery from '../../components/client/checkout/Delivery'
import PaymentMethod from '../../components/client/checkout/PaymentMethod'
import PlaceOrder from '../../components/client/checkout/PlaceOrder'
import Stepper from '../../components/client/checkout/Stepper'
import useCheckoutStore from '../../store/checkout-store'

const CheckoutLayout = () => {
  const { data: user } = useGetUser()
  const { items } = useCart()

  const { steps } = useCheckoutStore()

  if (!user) return <Navigate to="/account/login" replace />
  // check if cart isvalid (not empty)
  const cartIsValid = Object.entries(items).length > 0
  if (!cartIsValid) return <Navigate to=".." />

  return (
    <>
      <Stepper
        activeStep={steps.active}
        changeActiveStep={steps.changeActiveStep}
      />
      <div className="container mx-auto mb-6">
        {steps.active === 0 && <Delivery />}
        {steps.active === 1 && <PaymentMethod />}
        {steps.active === 2 && <PlaceOrder />}
      </div>
    </>
  )
}

export default CheckoutLayout
