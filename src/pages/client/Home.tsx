import { FC } from 'react'
import spinner from '../../assets/icons/spinner.png'
import queryString from 'query-string'
import HomeProducts from '../../components/client/home/HomeProducts'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../features/client/products/queries/useProducts'

const Home: FC = () => {
  const [searchParams] = useSearchParams()
  const params = queryString.parse(searchParams.toString(), {
    arrayFormat: 'comma',
  })

  const { isLoading, isFetching } = useProducts(params)

  return (
    <div className="min-h-screen px-3 md:px-6">
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
        <HomeProducts />
      )}
    </div>
  )
}

export default Home
