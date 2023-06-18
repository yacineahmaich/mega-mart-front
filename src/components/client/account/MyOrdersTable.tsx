import { Link } from 'react-router-dom'
import { useMyOrders } from '../../../features/client/account/useMyOrders'
import clsx from 'clsx'
import Spinner from '../ui/Spinner'

function MyOrdersTable() {
  const { data: orders, isLoading } = useMyOrders()

  if (isLoading) return <Spinner />

  if (orders.length === 0)
    return (
      <div>
        <p className="text-lg text-dark-500">
          It look like you don't have any order yet !
        </p>
        <button className="mt-2">
          <Link to="/cart" className="font-medium underline text-primary-500">
            <span>Order now</span>
          </Link>
        </button>
      </div>
    )

  return (
    <section>
      <table className="w-full mt-4 text-left border border-gray">
        <thead className="text-xs uppercase bg-light text-primary-600">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">price</th>
            <th className="px-4 py-2">status</th>
            <th className="px-4 py-2">items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="px-4 py-2">
                <Link
                  to={order.id.toString()}
                  className="font-medium underline text-dark-500"
                >
                  {order.id}
                </Link>
              </td>
              <td className="px-4 py-2">${order.totalPrice}</td>
              <td className="px-4 py-2 capitalize">
                <span
                  className={clsx('px-4 text-sm text-white rounded-full', {
                    'bg-green-400': order.status === 'paid',
                    'bg-danger-400': order.status === 'unpaid',
                  })}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2">{order.items.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default MyOrdersTable
