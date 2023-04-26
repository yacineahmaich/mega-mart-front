import { FC } from 'react'

import FilterModalButton from './FilterModalButton'
const sortOptions = [
  { label: 'Filter By', value: '' },
  { label: 'Product Name', value: 'name' },
  { label: 'Price Desc', value: 'price-desc' },
  { label: 'Price Asc', value: 'price-asc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
]

const productsPerPageOptions = [
  { label: '10 article per page', value: '10' },
  { label: '15 article per page', value: '15' },
  { label: '20 article per page', value: '20' },
  { label: '25 article per page', value: '25' },
  { label: '30 article per page', value: '30' },
]

const Sort: FC = () => {
  return (
    <div className="flex col-span-2 space-x-4 md:justify-end">
      <select className="items-center justify-between hidden w-auto py-3 text-xs border rounded-lg border-gray md:flex focus:ring-0 focus:border-dark-500 form-select bg-light sm:w-52 text-dark-600">
        {productsPerPageOptions.map(op => (
          <option value={op.value}>{op.label}</option>
        ))}
      </select>
      <FilterModalButton />

      <select className="flex items-center justify-between w-auto py-2 m-0 text-xs text-white border rounded-full md:py-3 md:rounded-lg focus:ring-0 focus:border-dark-500 form-select border-gray bg-primary-600 md:bg-light md:w-52 md:text-dark-600">
        {sortOptions.map(op => (
          <option value={op.value}>{op.label}</option>
        ))}
      </select>

      {/* <Select
        options={productsPerPageOptions}
        selectedOption={selectArctcilePerPage}
        onChange={setSelectArctcilePerPage}
      />
      <Select
        options={filterOptions}
        selectedOption={selectedFilter}
        onChange={setselectedFilter}
      /> */}
    </div>
  )
}

export default Sort
