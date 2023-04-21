import { FC, useState } from 'react'
import Select from '../ui/Select'
const filterOptions = [
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

const MainFilter: FC = () => {
  const [selectedFilter, setselectedFilter] = useState(filterOptions[0])
  const [selectArctcilePerPage, setSelectArctcilePerPage] = useState(
    productsPerPageOptions[0]
  )

  return (
    <div className="flex justify-end col-span-2">
      <div className="flex space-x-4">
        <Select
          options={productsPerPageOptions}
          selectedOption={selectArctcilePerPage}
          onChange={setSelectArctcilePerPage}
        />
        <Select
          options={filterOptions}
          selectedOption={selectedFilter}
          onChange={setselectedFilter}
        />
      </div>
    </div>
  )
}

export default MainFilter
