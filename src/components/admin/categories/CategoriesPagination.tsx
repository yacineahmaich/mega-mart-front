import { Pagination } from 'react-laravel-paginex'
import { useSearchParams } from 'react-router-dom'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'

const CategoriesPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const { data } = useCategories(page, { enabled: false })

  const onPaginate = ({ page }) => {
    setSearchParams(sp => {
      sp.set('page', page)

      return sp
    })
  }

  return (
    <div className="flex items-center justify-between my-4">
      <span className="text-sm font-normal text-dark-600 ">
        Showing&nbsp;
        <span className="font-semibold text-gray-900">
          {data.meta.from}-{data.meta.to}&nbsp;
        </span>
        of&nbsp;
        <span className="font-semibold text-gray-900">
          {data.meta.total}&nbsp;
        </span>
      </span>
      <Pagination
        data={data}
        options={{
          containerClass: 'flex -space-x-px',
          numberButtonClass:
            ' py-1.5 bg-white border text-dark-600 border-gray w-fit hover:bg-warning-900 hover:text-white',
          numberClass: 'px-3 font-medium py-1.5',
          prevButtonClass:
            ' py-1.5 bg-white border rounded-l-lg text-dark-600 border-gray hover:bg-warning-900 hover:text-white',
          nextButtonClass:
            'py-1.5 bg-white border rounded-r-lg text-dark-600 border-gray hover:bg-warning-900 hover:text-white',
          activeClass:
            'bg-gradient-to-br  border-b from-warning-900 to-warning-900 text-white',
          prevButtonText: '<',
          nextButtonText: '>',
        }}
        changePage={onPaginate}
      />
    </div>
  )
}
export default CategoriesPagination
