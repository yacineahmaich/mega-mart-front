import { FC } from 'react'
import spinner from '../../assets/icons/spinner.png'
import queryString from 'query-string'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

import { useParams, useSearchParams } from 'react-router-dom'
import Sort from '../../components/client/category/Sort'
import Filter from '../../components/client/category/Filter'
import ListProducts from '../../components/client/category/ListProducts'
import { useCategoryProducts } from '../../features/client/products/useCategoryProducts'

const HomeCategory: FC = () => {
  const { slug } = useParams()

  const [searchParams] = useSearchParams()
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  const { data, isLoading, isFetching } = useCategoryProducts(slug, params)

  console.log(data)

  return (
    <div className="min-h-screen p-3 md:p-6">
      {isFetching && !isLoading && (
        <div className="fixed left-1/2 top-4 flex items-center z-[99] gap-2 px-3 py-1 bg-white shadow">
          <img
            src={spinner}
            alt="spinner"
            className="w-4 h-4 mx-auto animate-spin"
          />
          <span className="text-sm font-bold">Loading...</span>
        </div>
      )}

      {isLoading ? (
        <div>
          <img
            src={spinner}
            alt="spinner"
            className="w-8 h-8 mx-auto duration-1000 mt-28 animate-spin"
          />
        </div>
      ) : data.products.length === 0 ? (
        <div>
          <p>No products to show</p>
        </div>
      ) : (
        <>
          <p className="text-sm font-semibold sm:text-lg text-dark-700">
            <ChevronDoubleRightIcon className="inline w-4 mr-1 align-middle" />
            Explore our {data.products.at(0).category.name}
            products
          </p>

          <section className="grid grid-cols-1 gap-y-3 md:gap-4 md:grid-cols-[250px_auto]">
            <Sort />
            <Filter />
            <ListProducts />
          </section>
        </>
      )}
    </div>
  )
}

export default HomeCategory
