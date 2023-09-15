import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import CategoriesTable from '../../../components/admin/categories/CategoriesTable'
import { useCategories } from '../../../features/admin/categories/useCategories'
import Loader from '../Loader'
import Error from '../Error'

const Categories = () => {
  const { isLoading, isError } = useCategories()

  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Categories</h2>

        <Link to="create">
          <span className="flex items-center gap-1 px-3 py-2 text-white bg-primary-400 hover:bg-primary-600 rounded-lg">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Create category</span>
          </span>
        </Link>
      </div>

      {isLoading ? <Loader /> : <CategoriesTable />}
    </div>
  )
}

export default Categories
