import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../../features/admin/products/queries/useProducts'
import ProductRow from './ProductRow'
import Pagination from '../ui/Pagination'

const ProductsTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data } = useProducts(page, { enabled: false })

  return (
    <section className="pb-40 overflow-x-auto">
      <div className="border rounded-b-lg border-gray">
        <table className="w-full text-sm text-left border text-dark-600 border-light">
          <thead className="text-xs text-white uppercase bg-primary-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4">
                Category
              </th>
              <th scope="col" className="px-6 py-4">
                quantity
              </th>
              <th scope="col" className="px-6 py-4">
                price
              </th>
              <th scope="col" className="px-6 py-4">
                discount
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.products.map(product => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
        <Pagination data={data} />
      </div>
    </section>
  )
}

export default ProductsTable
