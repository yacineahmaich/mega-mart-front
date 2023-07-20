import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useMyOrders } from '../../../features/client/account/useMyOrders'
import MyOrdersTable from '../../../components/client/account/MyOrdersTable'

const MyOrders = () => {
  const { data: orders } = useMyOrders()

  const totalOrders = orders?.length ?? 0

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold">
        <ShoppingCartIcon className="inline w-6 h-6 mr-2" />
        <span className="align-middle">My Orders</span>
        <span className="ml-1 text-sm text-dark-500">
          (<span>{totalOrders}</span>)
        </span>
      </h3>

      <MyOrdersTable />
    </div>
  )
}

export default MyOrders
