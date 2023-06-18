import { useSearchParams } from 'react-router-dom'
import OrderRow from './OrderRow'
import Pagination from '../ui/Pagination'
import { useOrders } from '../../../features/admin/orders/useOrders'

const OrdersTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data } = useOrders(page, { enabled: false })

  return (
    <section className="pb-40 overflow-x-auto">
      <div className="border rounded-b-lg border-gray">
        <table className="w-full text-sm text-left border text-dark-600 border-light">
          <thead className="text-xs text-white uppercase bg-cyan-600">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Date
              </th>
              <th scope="col" className="px-6 py-4">
                customer
              </th>
              <th scope="col" className="px-6 py-4">
                price
              </th>
              <th scope="col" className="px-6 py-4">
                status
              </th>
              <th scope="col" className="px-6 py-4">
                delivered
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map(order => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
        <Pagination data={data} />
      </div>
    </section>
  )
}

export default OrdersTable
