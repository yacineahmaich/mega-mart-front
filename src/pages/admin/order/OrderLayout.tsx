import { Outlet } from 'react-router-dom'
import Statistics from '../../../components/admin/orders/OrdersStatistics'

const OrderLayout = () => {
  return (
    <div>
      <main>
        <Statistics />
        <Outlet />
      </main>
    </div>
  )
}

export default OrderLayout
