import { BookOpenIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { HandThumbUpIcon, TruckIcon } from '@heroicons/react/24/solid'

const Checkout = () => {
  return (
    <div className="flex flex-col w-full gap-6 md:w-1/3 right-6">
      <article className="p-3 bg-white border divide-y rounded-lg divide-gray border-gray">
        <div className="flex items-center justify-between py-3 text-dark-700">
          <span>Total products</span>
          <span>22&nbsp;products</span>
        </div>
        <div className="flex items-center justify-between py-3 text-lg font-bold text-primary-500">
          <span>TOTAL</span>
          <span>11 165,61&nbsp;USD</span>
        </div>
      </article>
      <button className="py-3 font-semibold text-white rounded-full bg-primary-600">
        Validate Cart
      </button>

      <article className="px-8 py-4 rounded-lg bg-primary-800">
        <ul className="space-y-4 font-medium">
          <li className="flex items-center gap-4 text-white">
            <HandThumbUpIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Client Satisfaction</p>
          </li>
          <li className="flex items-center gap-4 text-white">
            <BookOpenIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Exclusive offers</p>
          </li>
          <li className="flex items-center gap-4 text-white">
            <TruckIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Fast delivery</p>
          </li>
          <li className="flex items-center gap-4 text-white">
            <ShieldCheckIcon className="p-1.5 rounded-full w-10 h-10 bg-primary-700" />
            <p>Products 100% Secure</p>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default Checkout
