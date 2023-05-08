import Checkout from '../../components/client/cart/Checkout'
import spinner from '../../assets/icons/spinner.png'
import { useCart } from '../../context/Cart'
import { useProducts } from '../../features/products/queries'
import Item from '../../components/client/cart/Item'

const Cart = () => {
  const { items } = useCart()

  const { data, isLoading, isFetching } = useProducts({
    productIds: ['-1', ...Object.keys(items)],
  })
  console.log(items)
  const products = data?.data ?? []
  const totalAmount = products.reduce(
    (total, { id, price }) => price * items[id]?.quantity + total,
    0
  )

  return (
    <section className="min-h-screen px-3 mb-20 md:px-6">
      <main className="relative flex flex-col h-full gap-12 md:flex-row">
        {isLoading && (
          <div className="w-full">
            <img
              src={spinner}
              alt="spinner"
              className="w-8 h-8 mx-auto mt-6 animate-spin"
            />
          </div>
        )}

        <div className="relative flex flex-col flex-1 gap-3" id="cart-products">
          {isFetching && (
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-white/60">
              <img
                src={spinner}
                alt="spinner"
                className="w-12 h-12 mx-auto mt-8 md:mt-14 lg:mt-20 animate-spin"
              />
            </div>
          )}
          {data?.data.map(product => (
            <Item key={product.id} product={product} />
          ))}
          {data?.data.length === 0 && (
            <div className="p-2 bg-warning-400">
              <p className="text-sm font-semibold text-danger-500">
                You cart is empty right now!
              </p>
            </div>
          )}
        </div>
        <Checkout totalProducts={data?.data.length} totalAmount={totalAmount} />
      </main>
    </section>
  )
}

export default Cart
