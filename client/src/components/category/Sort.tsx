import { ChangeEvent, FC } from 'react'
import {
  CATEGORY_PRODUCTS_PER_PAGE_OPTIONS,
  CATEGORY_PRODUCTS_SORT_OPTIONS,
} from '../../utils/contants'
import { useSearchParams } from 'react-router-dom'

const Sort: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentSortOption = CATEGORY_PRODUCTS_SORT_OPTIONS.find(
    op => op.value === searchParams.get('sort')
  )
  const productPerPage = CATEGORY_PRODUCTS_PER_PAGE_OPTIONS.find(
    op => op.value === searchParams.get('limit')
  )

  // handle Sort change
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value.trim()

    setSearchParams(sp => {
      if (query === '') sp.delete('sort')
      else sp.set('sort', query)

      // reset pagination
      sp.delete('page')
      return sp
    })
  }

  // handle Products per page change
  const handleProdutPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value.trim()
    setSearchParams(sp => {
      if (query === '') sp.delete('limit')
      else sp.set('limit', query)

      // reset pagination
      sp.delete('page')
      return sp
    })
  }

  return (
    <div className="flex col-span-2 space-x-4 md:justify-end">
      <select
        className="items-center justify-between hidden w-auto py-3 text-xs border rounded-lg border-gray md:flex focus:ring-0 focus:border-dark-500 form-select bg-light sm:w-52 text-dark-600"
        onChange={handleProdutPerPageChange}
        defaultValue={productPerPage?.value ?? 10}
      >
        {CATEGORY_PRODUCTS_PER_PAGE_OPTIONS.map((op, idx) => (
          <option key={idx} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>

      <select
        className="flex items-center justify-between w-auto py-2 m-0 text-xs text-white border rounded-full md:py-3 md:rounded-lg focus:ring-0 focus:border-dark-500 form-select border-gray bg-primary-600 md:bg-light md:w-52 md:text-dark-600"
        onChange={handleFilterChange}
        defaultValue={currentSortOption?.value ?? null}
      >
        {CATEGORY_PRODUCTS_SORT_OPTIONS.map((op, idx) => (
          <option key={idx} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Sort
