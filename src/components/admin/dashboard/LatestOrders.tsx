import { FC } from 'react'
import BlockLayout from './BlockLayout'
import Badge from '../../common/Badge'
import { useLatestOrders } from '../../../features/admin/dashboard/latest-orders'
import { Link } from 'react-router-dom'
import { getAvatarUrlFromName } from '../../../utils/helpers'
type Props = {
  children?: React.ReactNode
}
const LatestOrders: FC<Props> = () => {
  const { data: orders } = useLatestOrders()

  return (
    <BlockLayout title="Latest Orders" className="h-auto">
      <div className="h-full p-3">
        <table className="w-full overflow-hidden text-left shadow-lg">
          <thead className="bg-[#8884d8] text-white uppercase text-sm">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">customer</th>
              <th className="p-2">price</th>
              <th className="p-2">status</th>
              <th className="p-2">date</th>
            </tr>
          </thead>
          <tbody className="text-xs bg-white text-dark-500">
            {orders.map(order => (
              <tr
                key={order.id}
                className="hover:bg-[#8884d8b7] hover:text-white transition-colors"
              >
                <th className="p-3 underline text-dark-500">
                  <Link to={`/dashboard/orders/${order.id}`}>{order.id}</Link>
                </th>
                <td className="flex items-center gap-2 p-3">
                  <img
                    src={
                      order.customer?.avatar?.url ??
                      getAvatarUrlFromName(order.customer.name)
                    }
                    alt={order.customer?.avatar?.name}
                    className="w-8 h-8 rounded-full shadow-xl"
                  />
                  <span>{order.customer.name}</span>
                </td>
                <td className="p-3">${order.totalPrice}</td>
                <td className="p-3">
                  {order.status === 'paid' ? (
                    <Badge variant="success">Paid</Badge>
                  ) : (
                    <Badge variant="danger">Unaid</Badge>
                  )}
                </td>
                <td className="p-3">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BlockLayout>
  )
}

export default LatestOrders
