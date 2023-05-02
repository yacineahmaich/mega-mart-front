import { FC } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import DisclosureItem from '../../../UI/DisclosureItem'
import { useSearchParams } from 'react-router-dom'

const RatingFilter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleAssessmentChange = (value: string) => {
    setSearchParams(sp => {
      sp.set('rating', value)

      return sp
    })
  }

  const currentRating = searchParams.get('rating') ?? null

  const clear = () => {
    setSearchParams(sp => {
      sp.delete('rating')
      return sp
    })
  }

  return (
    <DisclosureItem title="Rating">
      <div className="space-y-2">
        {currentRating && (
          <button className="text-xs font-medium underline" onClick={clear}>
            clear
          </button>
        )}
        {Array.from({ length: 5 }, (_, idx) => {
          const rate = (idx + 1).toString()
          return (
            <button
              key={rate}
              className={`flex outline-none ${
                currentRating === rate ? 'scale-110 drop-shadow' : ''
              }`}
              onClick={() => handleAssessmentChange(rate)}
            >
              {Array.from({ length: +rate }, (_, j) => (
                <StarIcon key={j} className="w-4 h-4 text-yellow-400" />
              ))}
              {Array.from({ length: 5 - +rate }, (_, z) => (
                <StarIcon key={z} className="w-4 h-4 text-gray" />
              ))}
            </button>
          )
        })}
      </div>
    </DisclosureItem>
  )
}

export default RatingFilter
