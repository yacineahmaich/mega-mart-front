import CategoryRow from './CategoryRow'
import Pagination from '../ui/Pagination'
import { useCategories } from '../../../features/admin/categories/useCategories'
import Empty from '../ui/Empty'

const CategoriesTable = () => {
  const { data } = useCategories()

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
            {data.categories.length === 0 && <Empty resource="categories" />}
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
