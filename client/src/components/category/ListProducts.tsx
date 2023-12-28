import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ProductCard from '../ui/ProductCard'
import Pagination from './Pagination'
import Error from '../ui/Error'
import Spinner from '../ui/Spinner'
import { useCategoryProducts } from '../../services/category/useCategoryProducts'

const ListProducts: FC = () => {
  const { slug } = useParams()

  const { data, isError, isLoading, refetch } = useCategoryProducts(slug)

  if (isError)
    return (
      <div className="mt-10">
        <Error message="Failed to get products records" retry={refetch} />
      </div>
    )

  if (isLoading) return <Spinner />

  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      <div className="relative grid w-full grid-cols-2 gap-6 mb-10 lg:mb-14 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {data.products.length === 0 && (
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
      </div>
      {<Pagination meta={data.meta} />}
    </section>
  )
}

export default ListProducts
