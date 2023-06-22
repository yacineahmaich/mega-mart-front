import { FC } from 'react'

import { Link, useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../ui/ProductCard'
import Pagination from './Pagination'
import queryString from 'query-string'
import { useCategoryProducts } from '../../../features/client/products/category-products'
import { XMarkIcon } from '@heroicons/react/24/outline'

const ListProducts: FC = () => {
  const { slug } = useParams()

  const [searchParams] = useSearchParams()
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  const { data, isLoading } = useCategoryProducts(slug, params)
  const products = data?.products

  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      <div className="relative grid w-full grid-cols-2 gap-4 mb-10 lg:mb-14 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products?.length === 0 && (
          <div className="flex flex-col items-center mt-4 space-y-3 col-span-full">
            <p className="text-xl">
              Not Product found for the applied filter !
            </p>
            <span className="text-sm text-dark-500">
              visit another page or clear your filter
            </span>
            <Link
              to=""
              className="text-sm font-medium border rounded-full border-primary-600 text-primary-600 px-4 py-1.5 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <XMarkIcon className="inline w-5 mr-1" />
              <span>Clear filters</span>
            </Link>
          </div>
        )}
        {/* Commented content below it was here */}
      </div>
      {!isLoading && <Pagination meta={data.meta} />}
    </section>
  )
}

export default ListProducts
