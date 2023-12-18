import {
  AtSymbolIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useProductsByIds } from '../../../services/product/useProductsByIds'
import useCheckoutStore from '../../../store/checkout'
import useCartStore from '../../../store/cart'

function Preveiw() {
  const { deliverey } = useCheckoutStore()
  const { items, getItemsTotalPrice } = useCartStore()
  const { data: products, isLoading } = useProductsByIds({
    productIds: items.map(i => i.id),
  })

  const totalToPay = getItemsTotalPrice(products)

  return (
    <div className="p-6 font-medium border rounded-lg text-primary-600 border-gray">
      <h3 className="mb-3 text-sm font-medium text-primary-600">
        Order Preview
      </h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <UserCircleIcon className="w-6 h-6 mb-2" />
          <span>{deliverey?.name}</span>
        </div>
        <div>
          <AtSymbolIcon className="w-6 h-6 mb-2" />
          <span>{deliverey?.email}</span>
        </div>
        <div>
          <PhoneIcon className="w-6 h-6 mb-2" />
          <span>{deliverey?.phone}</span>
        </div>
        <div>
          <MapPinIcon className="w-6 h-6 mb-2" />
          <span>{deliverey?.shippingAddress}</span>
        </div>
        <div className="flex flex-col">
          <CreditCardIcon className="w-6 h-6 mb-2" />
          {isLoading ? (
            <span className="h-3 rounded-full animate-pulse w-9 bg-gray"></span>
          ) : (
            <span>${totalToPay}</span>
          )}
        </div>
        <div>
          <CalendarDaysIcon className="w-6 h-6 mb-2" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default Preveiw
