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
    <section className="overflow-hidden border rounded-lg border-gray">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
          <thead className="text-xs text-white uppercase bg-warning-900">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Category name
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
      </div>
      <Pagination data={data} theme="warning-900" />
    </section>
  )
}

export default CategoriesTable
