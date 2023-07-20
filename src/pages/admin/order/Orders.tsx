import { useSearchParams } from 'react-router-dom'

import Loader from '../Loader'
import Error from '../Error'
import { useOrders } from '../../../features/admin/orders/useOrders'
import OrdersTable from '../../../components/admin/orders/OrdersTable'

const Orders = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { isLoading, isError } = useOrders(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Orders</h2>
      </div>

      <OrdersTable />
    </div>
  )
}

export default Orders
