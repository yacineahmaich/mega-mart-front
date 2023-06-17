import {
  AtSymbolIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useCart } from '../../../context/Cart'
import { useCheckout } from '../../../context/Checkout'
import { useProductsByIds } from '../../../features/client/products/useProductsByIds'

function Preveiw() {
  const {
    delevery: { data },
  } = useCheckout()
  const { items, calcProductsTotalPrice } = useCart()
  const { data: products, isLoading } = useProductsByIds({
    productIds: [...Object.keys(items)],
  })

  const totalToPay = calcProductsTotalPrice(products)

  return (
    <div className="p-6 font-medium border rounded-lg text-primary-600 border-gray">
      <h3 className="mb-5 text-primary-700">Order Preview</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <UserCircleIcon className="w-8 h-8 mb-2" />
          <span>{data.name}</span>
        </div>
        <div>
          <AtSymbolIcon className="w-8 h-8 mb-2" />
          <span>{data.email}</span>
        </div>
        <div>
          <PhoneIcon className="w-8 h-8 mb-2" />
          <span>{data.phone}</span>
        </div>
        <div>
          <MapPinIcon className="w-8 h-8 mb-2" />
          <span>{data.shippingAddress}</span>
        </div>
        <div className="flex flex-col">
          <CreditCardIcon className="w-8 h-8 mb-2" />
          {isLoading ? (
            <span className="h-3 rounded-full animate-pulse w-9 bg-gray"></span>
          ) : (
            <span>${totalToPay}</span>
          )}
        </div>
        <div>
          <CalendarDaysIcon className="w-8 h-8 mb-2" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default Preveiw
