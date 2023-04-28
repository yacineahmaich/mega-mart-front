import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

import ProductsTable from '../../../components/admin/products/ProductsTable'

const Products = () => {
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
    </div>
  )
}

export default Products
