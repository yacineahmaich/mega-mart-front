import { products } from '../../utils/contants'
import { StarIcon } from '@heroicons/react/24/solid'

const Infos = () => {
  const product = products[6]

  return (
    <div className="flex-1 p-3">
      <h2 className="hidden max-w-md mb-3 text-2xl font-bold leading-8 md:block lg:text-3xl text-dark-600">
        {product.name}
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex">
          <StarIcon className="w-4 h-4 text-yellow-300 md:w-5 md:h-5" />
          <StarIcon className="w-4 h-4 text-yellow-300 md:w-5 md:h-5" />
          <StarIcon className="w-4 h-4 text-yellow-300 md:w-5 md:h-5" />
          <StarIcon className="w-4 h-4 text-yellow-300 md:w-5 md:h-5" />
          <StarIcon className="w-4 h-4 text-yellow-300 md:w-5 md:h-5" />
        </div>
        <div>
          <p className="text-sm font-medium">
            <span className="font-bold">34</span> Reviews
          </p>
        </div>
      </div>

      <div>
        <h4 className="mb-2 font-semibold text-md text-primary-600">
          About Product
        </h4>

        <p className="max-w-lg text-dark-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          itaque. Dolor nulla porro blanditiis distinctio tempore vel eos
          dolorem, tenetur consequuntur, nemo laboriosam odit possimus impedit
          doloremque modi iusto vero nam ipsum quidem asperiores voluptates?
          Incidunt, quae nam alias possimus atque sunt vitae autem iusto beatae.
        </p>
      </div>
    </div>
  )
}

export default Infos
