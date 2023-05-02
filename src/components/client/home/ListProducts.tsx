import { FC } from 'react'

import useProducts from '../../../features/products/queries'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'
import { toast } from 'react-hot-toast'

import ProductCard from './ProductCard'
import Pagination from './Pagination'
import ProductCardSkeleton from './ProductCardSekeleton'

const ListProducts: FC = () => {
  const [searchParams] = useSearchParams()

  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })
  const productsPerPage = +searchParams.get('_limit') || 10

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProducts(params, null, err => toast.error(err.message))

  return (
    <section className="w-full min-h-screen space-y-8">
      <div className="grid w-full grid-cols-2 gap-4 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isLoading
          ? Array.from({ length: productsPerPage }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      {isLoading ? null : <Pagination />}
    </section>
  )
}

export default ListProducts
