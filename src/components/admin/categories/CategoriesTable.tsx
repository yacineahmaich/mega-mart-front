import { useSearchParams } from 'react-router-dom'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import spinner from '../../../assets/icons/spinner.png'
import CategoryRow from './CategoryRow'

const CategoriesTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data, isFetching, isLoading } = useCategories(page, {
    enabled: false,
  })

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
      <section>
        <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
          <table className="w-full text-sm text-left border text-dark-600 border-light ">
            <thead className="text-xs text-white uppercase bg-warning-900">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Category name
                </th>
                <th scope="col" className="px-6 py-3">
                  Products per category
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
              {data.categories.map(category => (
                <CategoryRow key={category.id} category={category} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default CategoriesTable
