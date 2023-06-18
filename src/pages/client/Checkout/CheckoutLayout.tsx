import { Outlet, Navigate } from 'react-router'
import CheckoutProvider from '../../../context/Checkout/CheckoutProvider'
import Header from '../../../components/client/checkout/Header'
import { useGetUser } from '../../../features/auth/useGetUser'
import { useCart } from '../../../context/Cart'
import StepTitle from '../../../components/client/checkout/StepTitle'

const CheckoutLayout = () => {
  const { data: user } = useGetUser()
  const { items } = useCart()

  if (!user) return <Navigate to="/account/login" replace />

  // check if cart isvalid (not empty)
  const cartIsValid = Object.entries(items).length > 0
  if (!cartIsValid) return <Navigate to=".." />

  return (
    <CheckoutProvider>
      <Header />
      <StepTitle />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutLayout
