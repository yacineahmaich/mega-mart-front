import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const MyOrders = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">
        <ShoppingCartIcon className="inline w-6 h-6 mr-2" />
        <span className="align-middle">My Orders</span>
      </h3>
    </div>
  )
}

export default MyOrders
