import { Outlet } from 'react-router-dom'
import Statistics from '../../../components/admin/orders/OrdersStatistics'

const OrderLayout = () => {
  return (
    <div>
      <Statistics />
      <Outlet />
    </div>
  )
}

export default OrderLayout
