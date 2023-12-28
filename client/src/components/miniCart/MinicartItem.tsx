import { FC, useState } from 'react'
import moment from 'moment'
import {
  ExclamationTriangleIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import useCartStore from '../../store/cart'

type Props = {
  product: Product
  goToProduct: (slug: string) => void
}

const MinicartItem: FC<Props> = ({ product, goToProduct }) => {
  const { items, removeItem, getItem, increaseQty, decreaseQty } =
    useCartStore()

  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const itemInCart = getItem(product.id)

  const handleIncreaseQty = () => {
    if (itemInCart?.quantity === product.quantity) return
    increaseQty(product.id)
  }
  const handleDecreaseQty = () => {
    if (itemInCart?.quantity === 1) return setIsConfirmOpen(true)
    decreaseQty(product.id)
  }

  const handleRemoveFromCart = () => {
    removeItem(product.id)
    setIsConfirmOpen(false)
  }

  return (
    <li className="relative py-3" key={product.id}>
      {/* delete confirm */}
      {isConfirmOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full gap-4 bg-white animate-in slide-in-from-top-2">
          <p className="font-semibold text-center text-dark-700 text-md">
            Are you sure ! You want to delete it ?
          </p>
          <div className="space-x-2">
            <button
              className="w-24 py-1 text-sm font-medium transition-colors border rounded-full border-primary-600 text-dark-700 active:ring-2 active:ring-primary-500 active:ring-offset-1"
              onClick={() => setIsConfirmOpen(false)}
            >
              Cancel
            </button>
            <button
              className="w-24 py-1 text-sm font-medium text-white border rounded-full border-primary-600 bg-primary-600 active:ring-2 active:ring-primary-500 active:ring-offset-1"
              onClick={handleRemoveFromCart}
            >
              Sure
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <div className="w-20 h-24 overflow-hidden md:w-24 md:h-28 lg:h-32 lg:w-28 rounded-xl">
          <img
            src={product.images[0].url}
            alt={product.name}
            title={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-between gap-4">
            <div>
              <a
                href="#"
                role="link"
                className="leading-5 hover:underline"
                onClick={() => goToProduct(product.slug)}
              >
                <h3 className="text-sm font-medium text-dark-700 line-clamp-3 md:text-md hover:underline hover:text-primary-400">
                  {product.name}
                </h3>
              </a>
              <span className="text-xs text-dark-500">
                Added {moment(items[product.id]?.addedAt).fromNow()}
              </span>
            </div>
            <div>
              <button onClick={() => setIsConfirmOpen(true)}>
                <TrashIcon className="w-5 h-5 text-danger-500 hover:text-danger-900" />
              </button>
            </div>
          </div>

          <div className="mt-auto">
            {itemInCart?.quantity === product.quantity && (
              <p className="text-xs font-bold animate-in slide-in-from-bottom-1 text-danger-400">
                <ExclamationTriangleIcon className="inline w-5 h-5" />
                &nbsp;
                <span>You reach limit quantity</span>
              </p>
            )}
            <div className="flex items-center justify-between w-full mt-1 ">
              <div className="flex">
                <button
                  className="px-4 border rounded-l-md border-light text-primary-400"
                  onClick={handleIncreaseQty}
                >
                  <PlusSmallIcon className="w-4 h-4" />
                </button>
                <input
                  value={itemInCart?.quantity}
                  type="number"
                  className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-light disabled:bg-white"
                  disabled
                />
                <button
                  className="px-4 border rounded-r-md border-light text-danger-400"
                  onClick={handleDecreaseQty}
                >
                  <MinusSmallIcon className="w-4 h-4 " />
                </button>
              </div>
              <div>
                {product.discount ? (
                  <div className="relative flex flex-col items-center gap-0">
                    <span className="text-md text-gray">
                      <s>${product.price}</s>
                    </span>
                    <span className="right-full bottom-full absolute px-3 py-0.5 text-xs rounded bg-pink-600 self-end font-medium text-light pointer-events-none">
                      -{product.discount.percentage}%
                    </span>
                    <span className="text-lg font-bold text-primary-500">
                      ${product.discount.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-bold text-primary-500">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MinicartItem
