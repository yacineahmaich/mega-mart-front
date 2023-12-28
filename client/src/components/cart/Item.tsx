import { FC, useState } from 'react'
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import moment from 'moment'
import useCartStore from '../../store/cart'

type Props = {
  product: Product
}

const Item: FC<Props> = ({ product }) => {
  const { items, increaseQty, decreaseQty, removeItem } = useCartStore()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const itemInCart = items.find(i => i.id === product.id)

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
    <article className="relative flex p-4 bg-white border border-gray rounded-xl">
      {/* delete confirm */}
      {isConfirmOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full gap-4 bg-white rounded-xl animate-in slide-in-from-top-2">
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
      <div className="w-24 mr-6 h-28 md:w-28 md:h-32">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="object-cover w-full h-full rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start">
        <div>
          <Link to={`/products/${product.slug}`}>
            <h4 className="max-w-sm font-semibold leading-6 text-md md:text-lg text-dark-600 hover:underline hover:text-primary-400">
              {product.name}
            </h4>
          </Link>
        </div>

        <span className="mt-2 text-xs text-dark-500">
          Added {moment(items[product.id]?.addedAt).fromNow()}
        </span>

        <div className="mt-auto">
          {itemInCart?.quantity === product.quantity && (
            <p className="mb-1 text-xs font-bold animate-in slide-in-from-bottom-1 text-danger-400">
              <ExclamationTriangleIcon className="inline w-5 h-5" />
              &nbsp;
              <span>You reach limit quantity</span>
            </p>
          )}
          <div className="flex justify-center">
            <button
              className="px-4 bg-white border rounded-l-md border-gray text-primary-400"
              onClick={handleIncreaseQty}
            >
              <PlusSmallIcon className="w-4 h-4" />
            </button>
            <input
              value={itemInCart?.quantity}
              type="number"
              className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 font-medium text-dark-600 text-center  border-gray"
              onChange={() => null}
            />
            <button
              className="px-4 bg-white border rounded-r-md border-gray text-danger-400"
              onClick={handleDecreaseQty}
            >
              <MinusSmallIcon className="w-4 h-4 " />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between ml-auto">
        <button onClick={() => setIsConfirmOpen(true)}>
          <TrashIcon className="w-5 h-5 text-danger-100 hover:text-danger-300" />
        </button>

        <div className="flex items-center gap-1 text-primary-800">
          {product.discount ? (
            <div className="relative flex flex-col items-center gap-0">
              <span className="text-md text-gray">
                <s>${product.price}</s>
              </span>
              <span className="right-full mr-2 mb-1 bottom-0 absolute px-3 py-0.5 text-xs rounded bg-pink-600 self-end font-medium text-light pointer-events-none">
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
    </article>
  )
}

export default Item
