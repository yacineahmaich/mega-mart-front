import { useCart } from '../../../context/Cart'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'

function Action() {
  const { items, calcProductsTotalPrice } = useCart()
  const { data: products, isLoading } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  const totalProducts = products?.reduce(
    (total, product) => total + items[product.id]?.quantity,
    0
  )

  const totalToPay = calcProductsTotalPrice(products)

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
        className="px-6 py-1.5 rounded-full bg-primary-500 text-white text-smm font-medium"
        disabled={isLoading}
      >
        Place Order
      </button>
    </div>
  )
}

export default Action
