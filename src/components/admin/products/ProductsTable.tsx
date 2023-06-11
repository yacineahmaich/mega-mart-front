import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../../features/admin/products/queries/useProducts'
import ProductRow from './ProductRow'
import Pagination from '../ui/Pagination'

const ProductsTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data } = useProducts(page, { enabled: false })

  return (
    <section className="overflow-hidden border rounded-lg border-gray">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
          <thead className="text-xs text-white uppercase bg-primary-600">
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
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.products.map(product => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination data={data} />
    </section>
  )
}

export default ProductsTable
