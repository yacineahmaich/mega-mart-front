import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import MainCategoriesTable from '../../../components/admin/main-categories/MainCategoriesTable'
import { useMainCategories } from '../../../features/admin/main-categories/useMainCategories'
import Loader from '../Loader'
import Error from '../Error'

const Maincategories = () => {
  const { isLoading, isError } = useMainCategories()

  if (isError) return <Error />

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-dark-500">
          Manage Main Categories
        </h2>

        <Link to="create">
          <span className="flex items-center gap-1 px-3 py-2 text-white rounded-lg bg-primary-400 hover:bg-primary-600">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Create main category</span>
          </span>
        </Link>
      </div>

      {isLoading ? <Loader /> : <MainCategoriesTable />}
    </div>
  )
}

export default Maincategories
