import { Link } from 'react-router-dom'
import { useMyOrders } from '../../../features/client/account/useMyOrders'
import clsx from 'clsx'
import Spinner from '../ui/Spinner'
import moment from 'moment'
import Message from '../ui/Message'
import Error from '../ui/Error'

function MyOrdersTable() {
  const { data: orders, isLoading, isError } = useMyOrders()

  if (isLoading) return <Spinner />

  if (isError) return <Error message="Failed to load orders" />

  if (orders.length === 0)
    return (
      <Message
        message="It look like you don't have any order yet !"
        className="max-w-sm"
      />
    )

  return (
    <section className="overflow-x-scroll">
      <table className="w-full mt-4 text-left border border-gray">
        <thead className="text-xs uppercase bg-light text-primary-600">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">date</th>
            <th className="px-4 py-2">price</th>
            <th className="px-4 py-2">status</th>
            <th className="px-4 py-2">delivery</th>
            <th className="px-4 py-2">items</th>
          </tr>
        </thead>
        <tbody className="text-sm md:text-base">
          {orders.map(order => (
            <tr key={order.id}>
              <th className="px-4 py-2">
                <Link
                  to={order.id.toString()}
                  className="font-medium underline line-clamp-1 text-dark-500"
                >
                  {order.id}
                </Link>
              </th>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">${order.totalPrice}</td>
              <td className="px-4 py-2 capitalize">
                <span
                  className={clsx(
                    'px-4 text-xs md:text-sm whitespace-nowrap text-white rounded-full',
                    {
                      'bg-green-400': order.status === 'paid',
                      'bg-danger-400': order.status === 'unpaid',
                    }
                  )}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <span
                  className={clsx(
                    'px-4 text-sm whitespace-nowrap text-white rounded-full',
                    {
                      'bg-green-400': order.delivered,
                      'bg-danger-400': !order.delivered,
                    }
                  )}
                >
                  {order.delivered
                    ? `Delivered ${moment(order.deliveredAt).fromNow()}`
                    : 'Not Delivered'}
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
