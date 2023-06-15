import { useSearchParams } from 'react-router-dom'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import CategoryRow from './CategoryRow'
import Pagination from '../ui/Pagination'

const CategoriesTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data } = useCategories(page, {
    enabled: false,
  })

  return (
    <section className="pb-40 overflow-x-auto">
      <div className="border rounded-b-lg border-gray">
        <table className="w-full text-sm text-left border text-dark-600 border-light">
          <thead className="text-xs text-white uppercase bg-orange-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Category name
              </th>
              <th scope="col" className="px-6 py-4">
                Parent category
              </th>
              <th scope="col" className="px-6 py-4">
                Products per category
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.categories.map(category => (
              <CategoryRow key={category.id} category={category} />
            ))}
          </tbody>
        </table>
        <Pagination data={data} theme="orange-500" />
      </div>
    </section>
  )
}

export default CategoriesTable
