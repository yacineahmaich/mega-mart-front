import CheckoutSummary from '../place-order/CheckoutSummary'
import Action from '../place-order/Action'
import Preveiw from '../place-order/Preveiw'

const PlaceOrder = () => {
  return (
    <section className="relative p-3 lg:p-6">
      <div className="grid md:gap-8 md:grid-cols-2 ">
        <div>
          <CheckoutSummary />
        </div>
        <div className="space-y-4">
          <Preveiw />
          <Action />
        </div>
      </div>
    </section>
  )
}

export default PlaceOrder
