import { usePlaceOrder } from '../../services/checkout/usePlaceOrder'
import { useProductsByIds } from '../../services/product/useProductsByIds'
import { toast } from 'react-hot-toast'
import Button from '../ui/Button'
import useCheckoutStore from '../../store/checkout'
import useCartStore from '../../store/cart'

function Action() {
  const { items, getItemsTotalPrice, getItem } = useCartStore()
  const { data: products, isLoading } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  const { deliverey } = useCheckoutStore()

  const { mutate: placeOrder, isLoading: isPlacingOrder } = usePlaceOrder()

  const totalProducts = products?.reduce(
    (total, product) => total + getItem(product.id)?.quantity,
    0
  )
  const totalToPay = getItemsTotalPrice(products ?? [])

  const handlePlaceOrder = () => {
    placeOrder(
      { cart: items, delivery: deliverey },
      {
        onError: (error: Error) => {
          if (!error.message) {
            toast.error('Something went wrong! Please try again later.')
          } else {
            toast.error(error.message)
          }
        },
        onSuccess({ session_url }) {
          // redirect user to stripe checkout form
          window.location.href = session_url
        },
      }
    )
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
