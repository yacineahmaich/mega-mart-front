import { useProductsByIds } from '../../services/product/useProductsByIds'
import useCartStore from '../../store/cart'
import Spinner from '../ui/Spinner'

function CheckoutSummary() {
  const { items } = useCartStore()
  const { data: products, isLoading } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  return (
    <div className="w-full p-5 mb-6 space-y-3 border rounded-lg border-gray">
      <h4 className="text-sm font-medium text-primary-600">Checkout Items</h4>
      {isLoading ? (
        <Spinner />
      ) : (
        products.map(product => {
          const itemInCart = items.find(i => i.id === product.id)

          return (
            <div key={product.id} className="flex justify-between gap-6">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-medium line-clamp-1 text-dark-500">
                  {product.name}
                </h2>
                <span className="p-1 text-xs font-bold border shrink-0 border-gray">
                  &times; {itemInCart?.quantity}
                </span>
              </div>
              <span className="font-medium text-black ">
                $
                {(product.discount ? product.discount.price : product.price) *
                  itemInCart?.quantity}
              </span>
            </div>
          )
        })
      )}
    </div>
  )
}

export default CheckoutSummary
