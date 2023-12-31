import { Link, useParams } from 'react-router-dom'
import { useOrder } from '../../../features/client/account/useOrder'
import Spinner from '../../../components/client/ui/Spinner'
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  MapIcon,
  ShoppingCartIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'
import Error from '../../../components/client/ui/Error'

function Order() {
  const { id } = useParams()

  const { data: order, isLoading, isError, refetch } = useOrder(id)

  if (isLoading) return <Spinner />
  if (isError) return <Error retry={refetch} />

  return (
    <div>
      <div className="mb-10">
        {order.status === 'unpaid' && (
          <div className="flex items-center justify-end gap-3 p-1 mb-3 ml-auto text-sm font-medium border rounded-lg w-fit border-danger-500 text-danger-500">
            <ExclamationTriangleIcon className="w-5 h-5" />
            <span>
              Unpaid orders will be automatically deleted after 24 hours!
            </span>
          </div>
        )}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-dark-500">
            <ShoppingCartIcon className="inline w-6 h-6 mr-2" />
            <span className="align-middle">
              Order{' '}
              <span className="hidden text-sm sm:inline">({order.id})</span>
            </span>
          </h3>

          {order.status === 'unpaid' && (
            <form action={order.checkoutUrl} method="GET">
              <button
                // href={order.checkoutUrl}
                className="px-5 py-1.5 text-white divide-x rounded cursor-pointer bg-primary-500 hover:bg-primary-600 transition-colors"
              >
                <CreditCardIcon className="inline w-5 h-5 mr-2" />
                <span className="pl-2">Pay now</span>
              </button>
            </form>
          )}
        </div>

        <div className="grid grid-cols-2 p-3 text-sm font-medium border md:p-6 md:divide-x sm:rid-cols-3 gap-y-3 md:grid-cols-5 text-primary-500 ">
          <div className="text-center">
            <MapIcon className="inline w-6 h-6 mb-4" />
            <p>{order.delivery.shippingAddress}</p>
          </div>
          <div className="text-center">
            <CurrencyDollarIcon className="inline w-6 h-6 mb-4" />
            <p>${order.totalPrice}</p>
          </div>
          <div className="text-center">
            <CalendarDaysIcon className="inline w-6 h-6 mb-4" />
            <p>{order.date}</p>
          </div>
          <div className="text-center">
            <TruckIcon className="inline w-6 h-6 mb-4" />
            {order.delivered ? (
              <p className="text-green-400">
                {new Date(order.deliveredAt).toDateString()}
              </p>
            ) : (
              <p className="text-danger-400">Not Delivered</p>
            )}
          </div>
          <div className="text-center">
            <BanknotesIcon className="inline w-6 h-6 mb-4" />
            {order.status === 'paid' ? (
              <p className="text-green-400">
                {new Date(order.paidAt).toDateString()}
              </p>
            ) : (
              <p className="text-danger-400">Unpaid</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-xl font-bold text-dark-500">
          <ClipboardDocumentListIcon className="inline w-6 h-6 mr-2" />
          <span className="align-middle">Order Items</span>
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {order.items.map(item => {
          const product = item.product

          return (
            <article
              key={item.id}
              className="flex p-2 border rounded border-gray"
            >
              <div>
                <img
                  src={product.images[0].url}
                  alt={product.images[0].name}
                  className="w-20 h-24 rounded"
                />
              </div>
              <div className="flex flex-col py-2 pl-4">
                <Link to={`/products/${product.slug}`}>
                  <h3 className="text-sm font-medium underline text-primary-600">
                    {product.name}
                  </h3>
                </Link>
                <div className="p-1 mt-auto text-xs font-bold border border-gray text-dark-500 w-fit">
                  &times;
                  <span>{item.quantity}</span>
                </div>
              </div>
              <div className="ml-auto text-xl text-primary-500">
                <span>${item.price}</span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Order
