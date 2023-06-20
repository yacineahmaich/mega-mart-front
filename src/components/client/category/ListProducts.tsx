import { FC } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../ui/ProductCard'
import Pagination from './Pagination'
import queryString from 'query-string'
import { useCategoryProducts } from '../../../features/client/products/category-products'

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
        {/* Commented content below it was here */}
      </div>
      {!isLoading && <Pagination meta={data.meta} />}
    </section>
  )
}

export default ListProducts
