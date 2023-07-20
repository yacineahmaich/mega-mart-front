import { useCart } from '../../../context/Cart'
import { usePlaceOrder } from '../../../features/client/checkout/usePlaceOrder'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'
import { toast } from 'react-hot-toast'
import Button from '../ui/Button'
import useCheckoutStore from '../../../store/checkout-store'

function Action() {
  const { items, calcProductsTotalPrice } = useCart()
  const { data: products, isLoading } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  const { deliverey } = useCheckoutStore()

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
    console.log({ cart: items, delivery: deliverey })
    placeOrder({ cart: items, delivery: deliverey })
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

      <Button
        onClick={handlePlaceOrder}
        variant="medium"
        className="rounded-full"
        isLoading={isPlacingOrder}
      >
        Place Order
      </Button>
    </div>
  )
}

export default Action
