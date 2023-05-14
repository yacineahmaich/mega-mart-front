import { FC } from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/Cart'
import clsx from 'clsx'

type Props = {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
  const { addToCart, items } = useCart()

  return (
    <article className="flex flex-col overflow-hidden bg-white border shadow-sm rounded-xl border-gray">
      <div className="relative group bg-light h-52">
        <Link to={`/${product.slug}`}>
          <img
            src={product.images[0].url}
            alt={product.name}
            title={product.name}
            loading="lazy"
            className={clsx('object-cover w-full h-full', {
              ' duration-500 animate-out group-hover:fade-out-0':
                product.images.length > 0,
            })}
          />
          {product.images.slice(1).map((img, idx) => (
            <img
              key={img.id}
              src={img.url}
              alt={img.url}
              className={clsx(
                'absolute inset-0 object-cover w-full h-full duration-500 hidden animate-in group-hover:block fade-in-0 fill-mode-backwards'
              )}
              style={{
                animationDelay: idx === 0 ? '0ms' : 800 * idx + 'ms',
              }}
            />
          ))}
        </Link>
        {/* <button className="absolute right-0 p-1 pr-3 transition-transform duration-200 translate-x-full rounded-l-lg outline-none text-light group-hover:translate-x-0 top-2 bg-primary-600">
          <HeartIcon className="w-5 h-5" />
        </button> */}
      </div>
      <div className="flex flex-col justify-between flex-1 p-3 space-y-4">
        <Link to={`/${product.slug}`}>
          <span className="font-medium leading-5 md:text-sm md:leading-4 line-clamp-3 text-dark-600 hover:underline hover:text-primary-400">
            {product.name}
          </span>
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <div className="relative">
            <span className="text-sm font-bold sm:text-md">
              ${product.price}
            </span>
            {/* {product.discount.has && (
              <>
                <span className="absolute block -mb-1 text-sm font-medium bottom-full text-dark-500">
                  <s>${product.discount.price}</s>
                </span>
                <span className="left-full bottom-0 ml-1 absolute px-3 py-0.5 text-xs rounded bg-pink-600 self-end font-medium text-light pointer-events-none">
                  -{product.discount.value}%
                </span>
              </>
            )} */}
          </div>
          <div>
            {items[product.id] ? (
              <span>
                <svg
                  viewBox="0 0 133 133"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-10 h-10"
                >
                  <g
                    id="check-group"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle
                      id="filled-circle"
                      className="fill-primary-500"
                      cx="66.5"
                      cy="66.5"
                      r="54.5"
                    />
                    <circle
                      id="white-circle"
                      fill="#FFFFFF"
                      cx="66.5"
                      cy="66.5"
                      r="55.5"
                    />
                    <circle
                      id="outline"
                      className="stroke-primary-500"
                      strokeWidth="4"
                      cx="66.5"
                      cy="66.5"
                      r="54.5"
                    />
                    <polyline
                      id="check"
                      stroke="#FFFFFF"
                      strokeWidth="5.5"
                      points="41 70 56 85 92 49"
                    />
                  </g>
                </svg>
              </span>
            ) : (
              <button
                className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 active:scale-90"
                onClick={() => addToCart(product.id)}
              >
                <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
