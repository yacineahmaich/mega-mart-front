import { Link, useParams } from 'react-router-dom'
import { useOrder } from '../../../features/client/account/useOrder'
import Spinner from '../../../components/client/ui/Spinner'
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
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
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-dark-500">
            <ShoppingCartIcon className="inline w-6 h-6 mr-2" />
            <span className="align-middle">
              Order <span className="text-sm">({order.id})</span>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-2 p-6 text-sm font-medium border divide-x sm:rid-cols-3 gap-y-3 md:grid-cols-5 text-primary-500 ">
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
              <p className="text-green-400">{order.deliveredAt}</p>
            ) : (
              <p className="text-danger-400">Not Delivered</p>
            )}
          </div>
          <div className="text-center">
            <BanknotesIcon className="inline w-6 h-6 mb-4" />
            {order.status === 'paid' ? (
              <p className="text-green-400">{order.paidAt}</p>
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
            <article className="flex p-2 border rounded border-gray">
              <div>
                <img
                  src={product.images[0].url}
                  alt={product.images[0].name}
                  className="w-20 h-24 rounded"
                />
              </div>
              <div className="flex flex-col py-2 pl-4">
                <Link to={`/products/${product.slug}`}>
                  <h3 className="text-sm font-medium text-dark-700">
                    {product.name}
                  </h3>
                </Link>
                <div className="p-1 mt-auto text-xs font-bold border text-dark-500 w-fit">
                  <span>X</span>
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
