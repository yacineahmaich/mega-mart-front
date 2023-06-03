import { FC } from 'react'

import { useSearchParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { useProducts } from '../../../features/client/products/queries/useProducts'
import queryString from 'query-string'

const ListProducts: FC = () => {
  const [searchParams] = useSearchParams()
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  const { data, isLoading } = useProducts(params)
  const products = data?.products

  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      <div className="relative grid w-full grid-cols-2 gap-4 mb-10 lg:mb-14 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Commented content below it was here */}
      </div>
      {!isLoading && <Pagination meta={data.meta} />}
    </section>
  )
}

export default ListProducts