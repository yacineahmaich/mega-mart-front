import { useState } from 'react'
import FilterModal from './FilterModal'

const FilterModalButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <button
        className="px-8 text-xs text-white rounded-full md:hidden bg-primary-600"
        onClick={onOpen}
      >
        Filter
      </button>

      <FilterModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default FilterModalButton
