import { useSearchParams } from 'react-router-dom'
import spinner from '../../../assets/icons/spinner.png'
import { useProducts } from '../../../features/admin/products/queries/useProducts'
import ProductRow from './ProductRow'

const ProductsTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data, isFetching, isLoading } = useProducts(page, { enabled: false })

  return (
    <>
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
                Category
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
            {isFetching && (
              <tr className="absolute inset-0 z-40 w-full h-full"></tr>
            )}
            {data.products.map(product => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductsTable
