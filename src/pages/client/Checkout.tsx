import { useState } from 'react'
import { Navigate } from 'react-router'
import CheckoutProvider from '../../context/Checkout/CheckoutProvider'
import { useGetUser } from '../../features/auth/useGetUser'
import { useCart } from '../../context/Cart'
import Stepper from 'react-stepper-horizontal'
import Delivery from '../../components/client/checkout/Delivery'
import PaymentMethod from '../../components/client/checkout/PaymentMethod'
import PlaceOrder from '../../components/client/checkout/PlaceOrder'

const CheckoutLayout = () => {
  const { data: user } = useGetUser()
  const { items } = useCart()

  const steps = [
    { title: 'Delevery Information', onClick: () => setActiveStep(0) },
    { title: 'Payment Method', onClick: () => setActiveStep(1) },
    { title: 'Place Order', onClick: () => setActiveStep(2) },
  ]

  const [activeStep, setActiveStep] = useState(2)

  if (!user) return <Navigate to="/account/login" replace />
  // check if cart isvalid (not empty)
  const cartIsValid = Object.entries(items).length > 0
  if (!cartIsValid) return <Navigate to=".." />

  return (
    <CheckoutProvider>
      <header className="p-6 mb-10 bg-primary-500">
        <div className="max-w-3xl mx-auto">
          <Stepper
            steps={steps}
            activeStep={activeStep}
            circleTop={0}
            defaultTitleColor={'#FFF'}
          />
        </div>
      </header>
      <div className="container mx-auto mb-6">
        {activeStep === 0 && <Delivery />}
        {activeStep === 1 && <PaymentMethod />}
        {activeStep === 2 && <PlaceOrder />}
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutLayout
