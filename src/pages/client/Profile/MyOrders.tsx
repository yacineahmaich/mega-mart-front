import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useMyOrders } from '../../../features/client/account/useMyOrders'
import MyOrdersTable from '../../../components/client/account/MyOrdersTable'
import { useSearchParams } from 'react-router-dom'
import useCartStore from '../../../store/cart'

const MyOrders = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { clear } = useCartStore()

  // clear client cart when canceling payment
  if (searchParams.get('cancel')) {
    clear()
    setSearchParams('')
  }

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
