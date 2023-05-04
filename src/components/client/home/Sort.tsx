import { ChangeEvent, FC } from 'react'
import FilterModalButton from './FilterModalButton'
import { useSearchParams } from 'react-router-dom'

const sortOptions = [
  { label: 'Sort By', value: '' },
  { label: 'Product Name', value: 'name' },
  { label: 'Price Desc', value: 'price-desc' },
  { label: 'Price Asc', value: 'price-asc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
]
const productsPerPageOptions = [
  { label: '10 article per page', value: '' },
  { label: '15 article per page', value: '15' },
  { label: '20 article per page', value: '20' },
]

const Sort: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentSortOption = sortOptions.find(
    op => op.value === searchParams.get('sort')
  )
  const productPerPage = productsPerPageOptions.find(
    op => op.value === searchParams.get('limit')
  )

  // handle Sort change
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value.trim()

    setSearchParams(sp => {
      if (query === '') sp.delete('sort')
      else sp.set('sort', query)

      return sp
    })
  }

  // handle Products per page change
  const handleProdutPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const query = e.target.value.trim()

    setSearchParams(sp => {
      if (query === '') sp.delete('limit')
      else sp.set('limit', query)

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
        {productsPerPageOptions.map((op, idx) => (
          <option key={idx} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      <FilterModalButton />

      <select
        className="flex items-center justify-between w-auto py-2 m-0 text-xs text-white border rounded-full md:py-3 md:rounded-lg focus:ring-0 focus:border-dark-500 form-select border-gray bg-primary-600 md:bg-light md:w-52 md:text-dark-600"
        onChange={handleFilterChange}
        defaultValue={currentSortOption?.value ?? null}
      >
        {sortOptions.map((op, idx) => (
          <option key={idx} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Sort
