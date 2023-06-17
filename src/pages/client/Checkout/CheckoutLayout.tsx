import { Outlet, Navigate } from 'react-router'
import CheckoutProvider from '../../../context/Checkout/CheckoutProvider'
import Header from '../../../components/client/checkout/Header'
import { useGetUser } from '../../../features/auth/useGetUser'

const CheckoutLayout = () => {
  const { data: user } = useGetUser()
  // check if there is a user
  if (!user) return <Navigate to="/account/login" replace />

  return (
    <CheckoutProvider>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutLayout
