import { Link } from 'react-router-dom'
import { useMyOrders } from '../../../features/client/account/useMyOrders'
import Spinner from '../ui/Spinner'
import moment from 'moment'
import Message from '../ui/Message'
import Error from '../ui/Error'
import Badge from '../../common/Badge'

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
                <Badge variant={order.status === 'paid' ? 'success' : 'danger'}>
                  {order.status}
                </Badge>
              </td>
              <td className="px-4 py-2">
                <Badge variant={order.delivered ? 'success' : 'danger'}>
                  {order.delivered
                    ? `${moment(order.deliveredAt).fromNow()}`
                    : 'No'}
                </Badge>
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
