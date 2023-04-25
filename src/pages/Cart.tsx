import Products from '../components/cart/Products'
import Checkout from '../components/cart/Checkout'

const Cart = () => {
  return (
    <section className="px-3 mb-20 md:px-6">
      <main className="relative flex flex-col h-full gap-12 md:flex-row">
        <Products />
        <Checkout />
      </main>
    </section>
  )
}

export default Cart
