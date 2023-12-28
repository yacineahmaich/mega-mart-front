import Checkout from '../components/cart/Checkout'
import { useProductsByIds } from '../services/product/useProductsByIds'
import Message from '../components/ui/Message'
import Spinner from '../components/ui/Spinner'
import Products from '../components/cart/Products'
import useCartStore from '../store/cart'
import Navigation from '../components/Navigation'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Cart = () => {
  const { items, getItemsTotalPrice } = useCartStore()

  const { data: products, isLoading } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  const totalAmount = getItemsTotalPrice(products ?? [])
  const totalProducts = products?.length ?? 0

  return (
    <>
      <Navigation
        breadcrumb={[
          {
            label: 'My cart',
            icon: ShoppingCartIcon,
          },
        ]}
      />
      <section className="min-h-screen p-3 mb-20 md:p-6">
        <h2 className="mb-4 text-3xl font-bold text-dark-700">My Cart</h2>
        {isLoading ? (
          <Spinner />
        ) : totalProducts === 0 ? (
          <Message
            message="You cart is empty right now!"
            className="max-w-sm"
          />
        ) : (
          <section className="relative flex flex-col h-full gap-12 md:flex-row">
            <Products />
            <Checkout totalProducts={totalProducts} totalAmount={totalAmount} />
          </section>
        )}
      </section>
    </>
  )
}

export default Cart
