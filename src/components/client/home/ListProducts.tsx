import { FC, useEffect } from 'react'

import { useProducts } from '../../../features/products/queries'
import { useSearchParams } from 'react-router-dom'
import queryString from 'query-string'
// import { toast } from 'react-hot-toast'
import laoder from '../../../assets/icons/loader1.gif'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import ProductCardSkeleton from './ProductCardSekeleton'

const ListProducts: FC = () => {
  const [searchParams] = useSearchParams()

  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })
  const productsPerPage = +searchParams.get('limit') || 10

  const { data, isLoading, isFetching, isError, error } = useProducts(params)

  useEffect(() => {
    if (!isLoading && !isFetching) return

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [isLoading, isFetching])

  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      {isFetching && (
        <div className="mb-3 transition-all origin-top">
          <img
            src={laoder}
            alt="spinner"
            className="w-8 h-8 mx-auto duration-1000 "
          />
        </div>
      )}
      <div className="relative grid w-full grid-cols-2 gap-4 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* {isFetching && !isLoading && (
          <div className="absolute inset-0 z-40 w-full h-full bg-white/90">
            <img
              src={spinner}
              alt="spinner"
              className="w-8 h-8 mx-auto duration-1000 mt-28 animate-spin"
            />
          </div>
        )} */}

        {isLoading
          ? Array.from({ length: productsPerPage }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : data.data?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      {isLoading ? null : <Pagination meta={data.meta} />}
    </section>
  )
}

export default ListProducts
