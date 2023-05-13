import { Outlet } from 'react-router-dom'
import { useGetCustomer } from '../features/auth/useGetCustomer'

const DefaultLayout = () => {
  useGetCustomer()
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
