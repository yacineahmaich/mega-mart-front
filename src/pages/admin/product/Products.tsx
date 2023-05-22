import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Link, ScrollRestoration, useSearchParams } from 'react-router-dom'

import Loader from '../Loader'
import Error from '../Error'
import ProductsPagination from '../../../components/admin/products/ProductsPagination'
import ProductsTable from '../../../components/admin/products/ProductsTable'
import { useProducts } from '../../../features/admin/products/queries/useProducts'

const Products = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { isLoading, isError } = useProducts(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Products</h2>

        <Link to="create">
          <span className="flex items-center gap-1 px-3 py-2 text-white rounded-lg bg-info-900 hover:bg-info-900/80">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Create product</span>
          </span>
        </Link>
      </div>

      <ProductsTable />
      <ProductsPagination />
      <ScrollRestoration />
    </div>
  )
}

export default Products
