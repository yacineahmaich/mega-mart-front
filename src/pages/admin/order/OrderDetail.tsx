import { CheckIcon, TruckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  CalendarDaysIcon,
  MapPinIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import Error from '../Error'
import Loader from '../Loader'
import Button from '../../../components/client/ui/Button'
import { useParams } from 'react-router-dom'
import { useOrder } from '../../../features/admin/orders/useOrder'
import moment from 'moment'
import { useToggleDelivered } from '../../../features/admin/orders/useToggleDelivered'

const OrderDetail = () => {
  const { id } = useParams()

  const { data: order, isLoading, isError } = useOrder(id)

  const { mutate: toggleDelivered, isLoading: isTogglingDelevered } =
    useToggleDelivered()

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Order Detail</h2>
      </div>

      <div>
        <header className="flex items-center justify-between p-6 text-sm font-medium text-white bg-primary-600">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CalendarDaysIcon className="w-6 h-6 text-primary-800" />
              <span>{moment(order.date).format('MMM D, Y H:M A')}</span>
            </div>
            <span>Order ID: {order.id}</span>
          </div>
          {order.delivered ? (
            <div className="flex items-center gap-1 text-green-500">
              <TruckIcon className=" w-7 h-7" />
              Delivered {moment(order.deliveredAt).fromNow()}
            </div>
          ) : null}
        </header>

        <div className="flex justify-between p-6">
          <div className="flex gap-3">
            <div className="p-2 rounded-full h-fit bg-primary-600/50">
              <UserIcon className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-600">Customer</h4>
              <div className="flex flex-col">
                <span>{order.customer.name}</span>
                <a href={`mailto:${order.customer.email}`}>
                  {order.customer.email}
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="p-2 rounded-full h-fit bg-primary-600/50">
              <ShoppingBagIcon className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-600">Shopping</h4>
              <div className="flex flex-col">
                <span className="max-w-xs">items: {order.items.length}</span>
                <span className="max-w-xs">total: ${order.totalPrice}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="p-2 rounded-full h-fit bg-primary-600/50">
              <MapPinIcon className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-600">Delivery</h4>
              <div className="flex flex-col">
                <span className="max-w-xs">
                  Adress: {order.delivery.shippingAddress}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-10">
          <table className="col-span-2 text-sm border border-gray">
            <thead className="border border-gray">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Unit price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody className="text-dark-600">
              {order.items.map(item => (
                <tr className="border-b border-gray">
                  <th className="flex items-center gap-2">
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.images[0].name}
                      className="w-20 h-20"
                    />
                    <span>{item.product.name}</span>
                  </th>
                  <th>{item.price}</th>
                  <th>{item.quantity}</th>
                  <th>${item.quantity * item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>

          <Button
            className="h-fit"
            onClick={() => toggleDelivered({ order: order.id })}
            isLoading={isTogglingDelevered}
          >
            <div className="flex items-center gap-4">
              {order.delivered ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <CheckIcon className="w-6 h-6" />
              )}
              <span>
                {order.delivered
                  ? 'Mark as Not Delevered'
                  : 'Mark as Delevered'}
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
