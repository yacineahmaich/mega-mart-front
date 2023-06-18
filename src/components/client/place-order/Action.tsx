import { useCart } from '../../../context/Cart'
import { usePlaceOrder } from '../../../features/client/checkout/usePlaceOrder'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'
import loader from '../../../assets/icons/loader.svg'
import clsx from 'clsx'
import { toast } from 'react-hot-toast'
import { useCheckout } from '../../../context/Checkout'

function Action() {
  const { items, calcProductsTotalPrice } = useCart()
  const { data: products, isLoading } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  const { delivery } = useCheckout()

  const { mutate: placeOrder, isLoading: isPlacingOrder } = usePlaceOrder({
    onError: (error: Error) => {
      if (!error.message) {
        toast.error('Something went wrong! Please try again later.')
      } else {
        toast.error(error.message)
      }
    },
    onSettled({ session_url }) {
      // redirect user to stripe checkout form
      window.location.href = session_url
    },
  })

  const totalProducts = products?.reduce(
    (total, product) => total + items[product.id]?.quantity,
    0
  )
  const totalToPay = calcProductsTotalPrice(products)

  const handlePlaceOrder = () => {
    console.log({ cart: items, delivery: delivery.data })
    placeOrder({ cart: items, delivery: delivery.data })
  }

  return (
    <div className="flex flex-col gap-4 p-3 border rounded-lg border-gray">
      <div className="flex justify-between p-3">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-dark-500">Total Products</span>
          {isLoading ? (
            <span className="h-4 rounded-full animate-pulse w-9 bg-gray"></span>
          ) : (
            <span className="text-lg font-bold text-primary-500">
              {totalProducts}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-dark-500">Total to pay</span>
          {isLoading ? (
            <span className="h-4 rounded-full animate-pulse w-9 bg-gray"></span>
          ) : (
            <span className="text-lg font-bold text-primary-500">
              ${totalToPay}
            </span>
          )}
        </div>
      </div>

      <button
        className="relative px-6 py-2 font-medium text-white rounded-full bg-primary-500 text-smm"
        onClick={handlePlaceOrder}
        disabled={isLoading || isPlacingOrder}
      >
        <div
          className={clsx('absolute inset-0 flex items-center justify-center', {
            visible: isPlacingOrder,
            invisible: !isPlacingOrder,
          })}
        >
          <img
            src={loader}
            alt="loader"
            className="w-4 h-4 animate-spin absol"
          />
        </div>
        <span
          className={clsx({
            invisible: isPlacingOrder,
          })}
        >
          Place Order
        </span>
      </button>
    </div>
  )
}

export default Action
