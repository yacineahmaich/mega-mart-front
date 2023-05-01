import { ChangeEvent, FC } from 'react'
import { useSearchParams } from 'react-router-dom'

import FilterModalButton from './FilterModalButton'
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
  // { label: '12 article per page', value: '12' },
  // { label: '14 article per page', value: '14' },
]

const Sort: FC = () => {
  const [_, setSearchParams] = useSearchParams()

  // handle Sort change
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => {
      if (!e.target.value) prev.delete('_sort')
      else prev.set('_sort', e.target.value)

      return prev
    })
  }

  // handle Products per page change
  const handleProdutPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => {
      if (!e.target.value) prev.delete('_limit')
      else prev.set('_limit', e.target.value)

      return prev
    })
  }

  return (
    <div className="flex col-span-2 space-x-4 md:justify-end">
      <select
        className="items-center justify-between hidden w-auto py-3 text-xs border rounded-lg border-gray md:flex focus:ring-0 focus:border-dark-500 form-select bg-light sm:w-52 text-dark-600"
        onChange={handleProdutPerPageChange}
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
