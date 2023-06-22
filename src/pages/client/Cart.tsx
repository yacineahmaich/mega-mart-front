import Checkout from '../../components/client/cart/Checkout'
import spinner from '../../assets/icons/spinner.png'
import { useCart } from '../../context/Cart'
import Item from '../../components/client/cart/Item'
import { useProductsByIds } from '../../features/client/products/useProductsByIds'
import Message from '../../components/client/ui/Message'

const Cart = () => {
  const { items, calcProductsTotalPrice } = useCart()

  const {
    data: products,
    isLoading,
    isFetching,
  } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  const sortedProducts = products?.slice().reverse()
  const totalAmount = calcProductsTotalPrice(products)

  return (
    <section className="min-h-screen p-3 mb-20 md:p-6">
      <h2 className="mb-4 text-3xl font-bold text-dark-700">My Cart</h2>
      {isLoading ? (
        <div className="w-full">
          <img
            src={spinner}
            alt="spinner"
            className="w-8 h-8 mx-auto mt-6 animate-spin"
          />
        </div>
      ) : products?.length === 0 ? (
        <Message message="You cart is empty right now!" className="max-w-sm" />
      ) : (
        <main className="relative flex flex-col h-full gap-12 md:flex-row">
          <div
            className="relative flex flex-col flex-1 gap-3 p-6 bg-light h-fit"
            id="cart-products"
          >
            <div className="flex justify-between">
              <p>&nbsp;</p>
              <p>{products.length} products</p>
            </div>
            {isFetching && (
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-white/60">
                <img
                  src={spinner}
                  alt="spinner"
                  className="w-12 h-12 mx-auto mt-8 md:mt-14 lg:mt-20 animate-spin"
                />
              </div>
            )}
            {sortedProducts?.map(product => (
              <Item key={product.id} product={product} />
            ))}
          </div>
          <Checkout
            totalProducts={products?.length ?? 0}
            totalAmount={totalAmount}
          />
        </main>
      )}
    </section>
  )
}

export default Cart
