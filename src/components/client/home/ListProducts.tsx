import { FC } from 'react'

import { useSearchParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { useProducts } from '../../../features/products/queries'
import queryString from 'query-string'

const ListProducts: FC = () => {
  const [searchParams] = useSearchParams()
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  const { data, isLoading } = useProducts(params)
  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      <div className="relative grid w-full grid-cols-2 gap-4 mb-10 lg:mb-14 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.data?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Commented content below it was here */}
      </div>
      {!isLoading && <Pagination meta={data.meta} />}
    </section>
  )
}

export default ListProducts

{
  /* {isFetching && !isLoading && (
          <div className="absolute inset-0 z-40 w-full h-full bg-white/90">
            <img
              src={spinner}
              alt="spinner"
              className="w-8 h-8 mx-auto duration-1000 mt-28 animate-spin"
            />
          </div>
        )} */
}
{
  /* {isLoading
          ? Array.from({ length: productsPerPage }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : data.data?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))} */
}
