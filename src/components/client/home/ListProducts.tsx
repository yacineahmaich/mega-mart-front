import { FC } from 'react'

import useProducts from '../../../features/products/queries'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'
import { toast } from 'react-hot-toast'

import ProductCard from './ProductCard'
import Pagination from './Pagination'
import ProductCardSkeleton from './ProductCardSekeleton'
import ErrorMsg from '../../UI/ErrorMsg'

const ListProducts: FC = () => {
  const [searchParams] = useSearchParams()

  const params = queryString.parse(searchParams.toString())
  const productsPerPage = +searchParams.get('_limit') || 10

  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = useProducts(params, null, err => toast.error(err.message))

  return (
    <section className="w-full space-y-8">
      <div className="grid w-full grid-cols-2 gap-4 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isLoading ? (
          Array.from({ length: productsPerPage }, (_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        ) : isError ? (
          <div className="col-span-full">
            <ErrorMsg
              actionName="Try Again"
              actionFn={refetch}
              message={error.message}
            />
          </div>
        ) : (
          products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      {!isError && !isLoading && <Pagination />}
    </section>
  )
}

export default ListProducts
