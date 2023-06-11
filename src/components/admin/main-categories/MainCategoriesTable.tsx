import { useSearchParams } from 'react-router-dom'
import MainCategoryRow from './MainCategoryRow'
import Pagination from '../ui/Pagination'
import { useMainCategories } from '../../../features/admin/main-categories/queries/useMainCategories'

const MainCategoriesTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data } = useMainCategories(page, {
    enabled: false,
  })

  return (
    <section className="overflow-hidden border rounded-lg border-gray">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
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
      </div>
      <Pagination data={data} theme="info-100" />
    </section>
  )
}

export default MainCategoriesTable
