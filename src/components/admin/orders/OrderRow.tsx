import { FC } from 'react'
import { EyeIcon } from '@heroicons/react/24/outline'
import Actions from '../ui/Actions'
import { useToggleDelivered } from '../../../features/admin/orders/useToggleDelivered'
import Badge from '../../common/Badge'
import { Link } from 'react-router-dom'

type Props = {
  order: Order
}

const OrderRow: FC<Props> = ({ order }) => {
  const { mutate: toggleDelivered, isLoading } = useToggleDelivered()

  const handleToggleDelivered = () => {
    toggleDelivered({ order: order.id })
  }

  return (
    <tr
      key={order.id}
      className="bg-white border-b last:border-none text-dark-600 border-light"
    >
      <td className="px-6 py-3">{order.id}</td>
      <td className="px-6 py-3">{order.date}</td>
      <td className="px-6 py-3">{order.customer.name}</td>
      <td className="px-6 py-3">{order.totalPrice}</td>
      <td className="px-6 py-3">
        {order.status === 'paid' ? (
          <Badge variant="success">Paid</Badge>
        ) : (
          <Badge variant="danger">Unpaid</Badge>
        )}
      </td>
      <td className="px-6 py-3">
        {order.delivered ? (
          <Badge variant="success">delivered</Badge>
        ) : (
          <Badge variant="danger">not yet</Badge>
        )}
      </td>

      <td className="flex items-center justify-center p-2">
        <Actions>
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={handleToggleDelivered}
            disabled={isLoading}
          >
            {/* {isLoading ? (
              <svg
                fill="currentColor"
                width="800px"
                height="800px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-4 h-4 mr-4 animate-spin"
              >
                <g>
                  <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
                </g>
              </svg>
            ) : (
              <CheckIcon className="inline w-4 h-4 mr-4" />
            )}
            <span className="text-sm">
              {order.delivered ? 'Mark as Not Delivered' : 'Mark as Delivered'}
            </span> */}
            <Link
              to={`${order.id}`}
              className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            >
              <EyeIcon className="inline w-4 h-4 mr-4" />
              <span className="text-sm">See details</span>
            </Link>
          </button>
        </Actions>
      </td>
    </tr>
  )
}

export default OrderRow
