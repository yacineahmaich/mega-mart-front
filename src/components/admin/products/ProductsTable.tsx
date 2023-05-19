import { Link, ScrollRestoration, useSearchParams } from 'react-router-dom'
import spinner from '../../../assets/icons/spinner.svg'
import { Pagination } from 'react-laravel-paginex'
import { useProducts } from '../../../features/admin/products/queries/useProducts'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const ProductsTable = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page')
  const { data, isFetching, isLoading, isError, refetch } = useProducts(page)

  const onPaginate = ({ page }) => {
    setSearchParams(sp => {
      sp.set('page', page)

      return sp
    })
  }

  return (
    <section>
      <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
          <thead className="text-xs text-white uppercase bg-primary-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {isFetching && !isLoading && (
              <tr>
                <td colSpan={5} className="py-2 text-center bg-white">
                  <img
                    src={spinner}
                    alt="loader"
                    className="w-6 h-6 mx-auto animate-spin"
                  />
                </td>
              </tr>
            )}
            {isError ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-2 text-center bg-white text-danger-400"
                >
                  <ExclamationTriangleIcon className="inline w-5 h-5 mr-2" />
                  <span className="text-sm font-bold">
                    Something went wrong! failed to get records.
                  </span>
                  <button
                    className="px-4 py-1.5 font-semibold ml-2 border-2 rounded text-primary-600 border-primary-600"
                    onClick={() => refetch()}
                  >
                    try again
                  </button>
                </td>
              </tr>
            ) : (
              <>
                {data?.products?.map(product => (
                  <tr
                    key={product.id}
                    className="bg-white border-b last:border-none text-dark-600 border-light"
                  >
                    <td className="px-6 py-3">{product.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {product.name.slice(0, 20)}
                    </th>
                    <td className="px-6 py-3">{product.quantity}</td>
                    <td className="px-6 py-3">{product.price}</td>

                    <td className="space-x-3 text-center">
                      <Link
                        to={`${product.id}/edit`}
                        className="text-sm font-medium hover:underline text-info-300"
                      >
                        edit
                      </Link>
                      <Link
                        to={`${product.slug}`}
                        className="text-sm font-medium hover:underline text-warning-900"
                      >
                        show
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
            )}

            {isLoading &&
              Array.from({ length: 15 }, (_, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="p-3 text-center">
                    <span className="block h-3 rounded-full w-14 animate-pulse bg-gray"></span>
                  </td>
                  <td className="p-3">
                    <span className="block h-3 rounded-full w-60 animate-pulse bg-gray"></span>
                  </td>
                  <td className="p-3">
                    <span className="block w-20 h-3 rounded-full animate-pulse bg-gray"></span>
                  </td>
                  <td className="p-3">
                    <span className="block w-20 h-3 rounded-full animate-pulse bg-gray"></span>
                  </td>
                  <td className="flex justify-center p-3 space-x-2">
                    <span className="block w-10 h-3 rounded-full animate-pulse bg-gray"></span>
                    <span className="block w-10 h-3 rounded-full animate-pulse bg-gray"></span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {!isLoading && !isError && (
        <div className="flex items-center justify-between my-4">
          <span className="text-sm font-normal text-dark-600 ">
            Showing&nbsp;
            <span className="font-semibold text-gray-900">
              {data.meta.from}-{data.meta.to}&nbsp;
            </span>
            of&nbsp;
            <span className="font-semibold text-gray-900">
              {data.meta.total}&nbsp;
            </span>
          </span>
          <Pagination
            disabled={isFetching}
            data={data}
            options={{
              containerClass: 'flex -space-x-px',
              numberButtonClass:
                ' py-1.5 bg-white border text-dark-600 border-gray w-fit hover:bg-primary-600 hover:text-white',
              numberClass: 'px-4 py-1.5',
              prevButtonClass:
                ' py-1.5 bg-white border rounded-l-lg text-dark-600 border-gray hover:bg-primary-600 hover:text-white',
              nextButtonClass:
                'py-1.5 bg-white border rounded-r-lg text-dark-600 border-gray hover:bg-primary-600 hover:text-white',
              activeClass:
                'bg-gradient-to-br  border-b from-primary-600 to-primary-600 text-white',
              prevButtonText: '<',
              nextButtonText: '>',
            }}
            changePage={onPaginate}
          />
        </div>
      )}
      <ScrollRestoration />
    </section>
  )
}

export default ProductsTable
