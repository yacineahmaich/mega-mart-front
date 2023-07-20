import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Link, useSearchParams } from 'react-router-dom'
import MainCategoriesTable from '../../../components/admin/main-categories/MainCategoriesTable'
import { useMainCategories } from '../../../features/admin/main-categories/queries/useMainCategories'
import Loader from '../Loader'
import Error from '../Error'

const Maincategories = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { isLoading, isError } = useMainCategories(page)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">
          Manage Main Categories
        </h2>

        <Link to="create">
          <span className="flex items-center gap-1 px-3 py-2 text-white rounded-lg bg-info-700 hover:bg-info-800">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Create main category</span>
          </span>
        </Link>
      </div>

      <MainCategoriesTable />
    </div>
  )
}

export default Maincategories
