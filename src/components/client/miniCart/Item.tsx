import { FC, useState } from 'react'
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid'
import moment from 'moment'
import { useCart } from '../../../context/Cart'

type Props = {
  product: Product
}

const Item: FC<Props> = ({ product }) => {
  const { items, removeFromCart, changeQuantity } = useCart()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [quantity, setQuantity] = useState<number>(items[product.id]?.quantity)

  const increaseQty = () => {
    if (quantity === product.quantity) return
    changeQuantity(product.id, quantity + 1)
    setQuantity(q => {
      return q + 1
    })
  }
  const decreaseQty = () => {
    if (quantity === 1) return setIsConfirmOpen(true)
    changeQuantity(product.id, quantity - 1)
    setQuantity(q => {
      return q - 1
    })
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
              className="w-24 py-1 text-sm font-medium transition-colors border rounded-full border-primary-600 text-dark-700 active:ring-2 active:ring-primary-500 active:ring-offset-1 hover:bg-primary-600 hover:text-white"
              onClick={() => setIsConfirmOpen(false)}
            >
              Cancel{' '}
            </button>
            <button
              className="w-24 py-1 text-sm font-medium text-white border rounded-full border-primary-600 bg-primary-600 active:ring-2 active:ring-primary-500 active:ring-offset-1"
              onClick={() => {
                removeFromCart(product.id)
                setIsConfirmOpen(false)
              }}
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
              <a href="#" className="leading-5 hover:underline">
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
            {quantity === product.quantity && (
              <p className="text-xs font-bold animate-in slide-in-from-bottom-1 text-danger-400">
                <ExclamationTriangleIcon className="inline w-5 h-5" />
                &nbsp;
                {/* <span>No more quantity to add.</span> */}
                <span>You reach limit quantity</span>
              </p>
            )}
            <div className="flex items-center justify-between w-full mt-1 ">
              <div className="flex">
                <button
                  className="px-4 border rounded-l-md border-light text-primary-400"
                  onClick={increaseQty}
                >
                  <PlusSmallIcon className="w-4 h-4" />
                </button>
                <input
                  value={quantity}
                  type="number"
                  className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-light disabled:bg-white"
                  disabled
                />
                <button
                  className="px-4 border rounded-r-md border-light text-danger-400"
                  onClick={decreaseQty}
                >
                  <MinusSmallIcon className="w-4 h-4 " />
                </button>
              </div>
              <div>
                <span className="text-lg font-bold text-primary-500">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Item
