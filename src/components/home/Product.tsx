import { FC } from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'

type Props = {
  id: number
  name: string
  image: string
  price: string | number
  hasDiscount: boolean
}

const Product: FC<Props> = ({ id, name, image, price, hasDiscount }) => {
  return (
    <article className="overflow-hidden border bg-light rounded-xl border-gray">
      <div className="relative group">
        <a href="#">
          <img src={image} alt={name} title={name} />
        </a>
        <button className="absolute right-0 p-1 pr-3 transition-transform duration-200 translate-x-full rounded-l-lg outline-none text-light group-hover:translate-x-0 top-2 bg-primary-600">
          <HeartIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-3 space-y-6">
        <h3 className="font-medium line-clamp-2 text-dark-700">
          <a href="#">{name}</a>
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div>
              <span className="font-bold text-md">${price}</span>
              {hasDiscount && (
                <span className="block text-sm font-medium text-dark-500">
                  <s>${price}</s>
                </span>
              )}
            </div>
            {hasDiscount && (
              <span className="px-4 py-0.5 text-xs rounded-lg bg-pink-400 self-end font-medium text-light">
                -16%
              </span>
            )}
          </div>
          <div className="space-x-2">
            <button className="p-2 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700">
              <ShoppingCartIcon className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Product
