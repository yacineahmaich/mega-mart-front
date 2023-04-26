import { FC } from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  name: string
  image: string
  price: string | number
  hasDiscount: boolean
}

const Product: FC<Props> = ({ id, name, image, price, hasDiscount }) => {
  return (
    <article className="flex flex-col overflow-hidden bg-white border shadow-sm rounded-xl border-gray">
      <div className="relative bg-light group">
        <Link to={`/${id}`}>
          <img
            src={image}
            alt={name}
            title={name}
            className="object-cover w-full h-full"
          />
        </Link>
        <button className="absolute right-0 p-1 pr-3 transition-transform duration-200 translate-x-full rounded-l-lg outline-none text-light group-hover:translate-x-0 top-2 bg-primary-600">
          <HeartIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col justify-between flex-1 p-3 space-y-4">
        <Link to={`/${id}`}>
          <span className="font-medium leading-5 md:text-sm md:leading-4 line-clamp-3 text-dark-600">
            {name}
          </span>
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <div className="relative">
            <span className="text-sm font-bold sm:text-md">${price}</span>
            {hasDiscount && (
              <>
                <span className="absolute block -mb-1 text-sm font-medium bottom-full text-dark-500">
                  <s>${price}</s>
                </span>
                <span className="left-full bottom-0 ml-1 absolute px-3 py-0.5 text-xs rounded bg-pink-600 self-end font-medium text-light pointer-events-none">
                  -16%
                </span>
              </>
            )}
          </div>
          <div>
            <button className="p-2 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700">
              <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Product
