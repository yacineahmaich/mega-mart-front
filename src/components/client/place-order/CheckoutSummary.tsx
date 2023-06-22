import { useCart } from '../../../context/Cart'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'

function CheckoutSummary() {
  const { items } = useCart()
  const { data: products, isLoading } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  return (
    <div className="w-full p-5 mb-6 space-y-3 border rounded-lg border-gray">
      <h4 className="text-sm font-medium text-primary-600">Checkout Items</h4>
      {isLoading ? (
        <div className="space-y-5 animate-pulse">
          {Array.from({ length: 4 }, (_, i) => (
            <div className="flex justify-between ">
              <span className="w-full h-3 mr-10 rounded-full bg-gray"></span>
              <span className="h-3 rounded-full bg-gray w-9"></span>
            </div>
          ))}
        </div>
      ) : (
        products.map(product => (
          <div key={product.id} className="flex justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-medium text-dark-500">
                {product.name}
              </h2>
              <span className="p-1 text-xs border aspect-square">
                x {items[product.id]?.quantity}
              </span>
            </div>
            <span className="font-medium text-black">
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
