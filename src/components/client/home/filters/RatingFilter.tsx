import { FC } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import DisclosureItem from '../../../UI/DisclosureItem'
import useParams from '../../../../hooks/useParams'

const RatingFilter: FC = () => {
  const changeParams = useParams()

  const handleAssessmentChange = (value: string) => {
    changeParams('rating', value)
  }

  return (
    <DisclosureItem title="Rating">
      <div className="space-y-2">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={i}
            className="flex"
            onClick={() => handleAssessmentChange(i.toString())}
          >
            {Array.from({ length: i }, (_, j) => (
              <StarIcon key={j} className="w-3 h-3 text-yellow-400" />
            ))}
            {Array.from({ length: 5 - i }, (_, z) => (
              <StarIcon key={z} className="w-3 h-3 text-gray" />
            ))}
          </button>
        ))}
        {/* <button className="flex">
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-gray" />
          <StarIcon className="w-3 h-3 text-gray" />
          <StarIcon className="w-3 h-3 text-gray" />
          <StarIcon className="w-3 h-3 text-gray" />
        </button>
        <button className="flex">
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-gray" />
          <StarIcon className="w-3 h-3 text-gray" />
          <StarIcon className="w-3 h-3 text-gray" />
        </button>
        <button className="flex">
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-gray" />
          <StarIcon className="w-3 h-3 text-gray" />
        </button>
        <button className="flex">
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-gray" />
        </button>
        <button className="flex">
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <StarIcon className="w-3 h-3 text-yellow-400" />
        </button> */}
      </div>
    </DisclosureItem>
  )
}

export default RatingFilter
