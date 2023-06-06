import { FC } from 'react'
// import CategoryFilter from './filters/CategoryFilter'
import PriceFilter from './filters/PriceFilter'
import RatingFilter from './filters/RatingFilter'

const Filter: FC = () => {
  return (
    <div className="hidden space-y-4 md:block">
      {/* <CategoryFilter /> */}
      <PriceFilter />
      <RatingFilter />
    </div>
  )
}

export default Filter
