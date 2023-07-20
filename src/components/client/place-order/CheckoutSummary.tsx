import { useCart } from '../../../context/Cart'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'
import Spinner from '../ui/Spinner'

function CheckoutSummary() {
  const { items } = useCart()
  const { data: products, isLoading } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  return (
    <div className="w-full p-5 mb-6 space-y-3 border rounded-lg border-gray">
      <h4 className="text-sm font-medium text-primary-600">Checkout Items</h4>
      {isLoading ? (
        <Spinner />
      ) : (
        products.map(product => (
          <div key={product.id} className="flex justify-between gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-medium line-clamp-1 text-dark-500">
                {product.name}
              </h2>
              <span className="p-1 text-xs font-bold border shrink-0 border-gray">
                &times; {items[product.id]?.quantity}
              </span>
            </div>
            <span className="font-medium text-black ">
              $
              {(product.discount ? product.discount.price : product.price) *
                items[product.id]?.quantity}
            </span>
          </div>
        ))
      )}
    </div>
  )
}

export default CheckoutSummary
