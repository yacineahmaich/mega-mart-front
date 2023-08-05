import Checkout from '../../components/client/cart/Checkout'
import { useProductsByIds } from '../../features/client/products/useProductsByIds'
import Message from '../../components/client/ui/Message'
import Spinner from '../../components/client/ui/Spinner'
import Products from '../../components/client/cart/Products'
import useCartStore from '../../store/cart'

const Cart = () => {
  const { items, getItemsTotalPrice } = useCartStore()

  const { data: products, isLoading } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  const totalAmount = getItemsTotalPrice(products ?? [])
  const totalProducts = products?.length ?? 0

  return (
    <section className="min-h-screen p-3 mb-20 md:p-6">
      <h2 className="mb-4 text-3xl font-bold text-dark-700">My Cart</h2>
      {isLoading ? (
        <Spinner />
      ) : totalProducts === 0 ? (
        <Message message="You cart is empty right now!" className="max-w-sm" />
      ) : (
        <section className="relative flex flex-col h-full gap-12 md:flex-row">
          <Products />
          <Checkout totalProducts={totalProducts} totalAmount={totalAmount} />
        </section>
      )}
    </section>
  )
}

export default Cart
