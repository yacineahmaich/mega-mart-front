import { FC, useState } from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid'
import moment from 'moment'
import { useCart } from '../../../context/Cart'

type Props = {
  product: Product
}

const Item: FC<Props> = ({ product }) => {
  const { items, removeFromCart, changeQuantity } = useCart()
  const [quantity, setQuantity] = useState<number>(items[product.id]?.quantity)

  const increaseQty = () => {
    changeQuantity(product.id, quantity + 1)
    setQuantity(q => {
      return q >= product.quantity ? q : q + 1
    })
  }
  const decreaseQty = () => {
    changeQuantity(product.id, quantity - 1)
    setQuantity(q => {
      return q === 1 ? q : q - 1
    })
  }

  return (
    <li className="py-3" key={product.id}>
      <div className="flex gap-4">
        <div className="h-32 overflow-hidden w-28 rounded-xl">
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
                <h3 className="font-medium text-dark-700 line-clamp-3 text-md">
                  {product.name}
                </h3>
              </a>
              <span className="text-xs text-dark-500">
                Added {moment(items[product.id]?.addedAt).fromNow()}
              </span>
            </div>
            <div>
              <button onClick={() => removeFromCart(product.id)}>
                <TrashIcon className="w-5 h-5 text-danger-500 hover:text-danger-900" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mt-auto">
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
    </li>
  )
}

export default Item
