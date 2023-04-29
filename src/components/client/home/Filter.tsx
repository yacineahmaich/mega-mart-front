import { FC } from 'react'
import DisclosureItem from '../../UI/DisclosureItem'
import { StarIcon } from '@heroicons/react/24/solid'

const categories = [
  {
    id: 1,
    name: 'Club',
  },
  {
    id: 2,
    name: 'National Team',
  },
]

const Filter: FC = () => {
  return (
    <div className="hidden space-y-4 md:block">
      <DisclosureItem title="Category">
        <ul className="space-y-2">
          {categories.map(cat => (
            <li>
              <label htmlFor={cat.name} className="space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  id={cat.name}
                  name="categories"
                  value={cat.id}
                  className="rounded focus:ring-0"
                />
                <span>{cat.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </DisclosureItem>
      <DisclosureItem title="Price">
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
              USD
            </span>
            <input
              type="text"
              placeholder="Min"
              className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
            />
          </div>
          <div>-</div>
          <div className="relative">
            <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
              USD
            </span>
            <input
              type="text"
              placeholder="Max"
              className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
            />
          </div>
        </div>
      </DisclosureItem>
      <DisclosureItem title="Assessment">
        <div className="space-y-2">
          <button className="flex">
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
          </button>
        </div>
      </DisclosureItem>
    </div>
  )
}

export default Filter
