import { FC } from 'react'
import spinner from '../../assets/icons/spinner.png'
import queryString from 'query-string'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../features/client/products/queries/useProducts'
import Sort from '../../components/client/homeCategory/Sort'
import Filter from '../../components/client/homeCategory/Filter'
import ListProducts from '../../components/client/homeCategory/ListProducts'

const HomeCategory: FC = () => {
  const [searchParams] = useSearchParams()
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  const { isLoading, isFetching } = useProducts(params)

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
      ) : (
        <>
          <h2 className="text-sm font-semibold sm:text-lg text-dark-700">
            <ChevronDoubleRightIcon className="inline w-4 mr-1 font-bold align-middle" />
            Thousands of products to meet all your desires
          </h2>

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
