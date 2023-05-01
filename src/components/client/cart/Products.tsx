import { Link } from 'react-router-dom'
import { products } from '../../../utils/contants'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'

const Products = () => {
  return (
    <div className="flex flex-col flex-1 gap-3" id="cart-products">
      {products.map(product => (
        <article className="flex p-4 border bg-light/40 border-gray rounded-xl">
          <div className="mr-6 w-28 h-28 md:w-32 md:h-32">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <div>
              <Link to={`/${product.id}`}>
                <h4 className="max-w-sm font-semibold leading-6 text-md md:text-lg text-dark-600 hover:underline">
                  {product.name}
                </h4>
              </Link>
            </div>
            <div className="flex justify-center">
              <button className="px-4 bg-white border rounded-l-md border-gray text-primary-400">
                <PlusSmallIcon className="w-4 h-4" />
              </button>
              <input
                defaultValue={1}
                type="number"
                className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 font-medium text-dark-600 text-center  border-gray"
              />
              <button className="px-4 bg-white border rounded-r-md border-gray text-danger-400">
                <MinusSmallIcon className="w-4 h-4 " />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between ml-auto">
            <button>
              <TrashIcon className="w-6 h-6 text-danger-300 hover:text-danger-500" />
            </button>

            <div className="flex items-center gap-1 text-primary-800">
              <span className="text-lg font-bold md:text-xl">
                {product.price}
              </span>
              <span className="text-xs font-semibold">USD</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Products
