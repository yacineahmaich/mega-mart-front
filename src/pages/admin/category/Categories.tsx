import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Link, useSearchParams } from 'react-router-dom'
import CategoriesTable from '../../../components/admin/categories/CategoriesTable'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import Loader from '../Loader'
import Error from '../Error'
import CategoriesPagination from '../../../components/admin/categories/CategoriesPagination'

const Categories = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { isLoading, isError } = useCategories(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">Manage Categories</h2>

        <Link to="create">
          <span className="flex items-center gap-1 px-3 py-2 text-white rounded-lg bg-info-900 hover:bg-info-900/80">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Create category</span>
          </span>
        </Link>
      </div>

      <CategoriesTable />
      <CategoriesPagination />
    </div>
  )
}

export default Categories
