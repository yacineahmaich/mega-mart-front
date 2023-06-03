import { useState } from 'react'
import Sheet from '../../ui/Sheet'
import CategoryFilter from './filersSheet/CategoryFilter'
import PriceFilter from './filersSheet/PriceFilter'
import RatingFilter from './filersSheet/RatingFilter'

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

      <Sheet title="Filter" isOpen={isOpen} onClose={onClose}>
        <div className="p-3 space-y-3">
          <CategoryFilter />
          <PriceFilter />
          <RatingFilter />
        </div>
      </Sheet>
    </>
  )
}

export default FilterModalButton
