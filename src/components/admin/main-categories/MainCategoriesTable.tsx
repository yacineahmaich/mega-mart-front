import MainCategoryRow from './MainCategoryRow'
import Pagination from '../ui/Pagination'
import { useMainCategories } from '../../../features/admin/main-categories/queries/useMainCategories'

const MainCategoriesTable = () => {
  const { data } = useMainCategories()

  return (
    <section className="pb-40 overflow-x-auto">
      <div className="border rounded-b-lg border-gray">
        <table className="w-full text-sm text-left border text-dark-600 border-light">
          <thead className="text-xs text-white uppercase bg-info-700">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Subcategories per category
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.mainCategories.map(mainCategory => (
              <MainCategoryRow
                key={mainCategory.id}
                mainCategory={mainCategory}
              />
            ))}
          </tbody>
        </table>
        <Pagination data={data} theme="info-100" />
      </div>
    </section>
  )
}

export default MainCategoriesTable
