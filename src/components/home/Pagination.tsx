import { FC } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination: FC = () => {
  return (
    <section className="flex items-center justify-center gap-8 pb-10">
      <button className="flex items-center gap-2 px-6 py-2 text-white transition-colors rounded-full bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 hover:bg-primary-700">
        <ChevronLeftIcon className="w-5 h-5" />
        <span>Prev</span>
      </button>

      <ul className="flex gap-2 text-dark-700">
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          1
        </li>
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          2
        </li>
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          3
        </li>
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          4
        </li>
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          5
        </li>
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          ...
        </li>
        <li className="flex items-center justify-center w-10 h-10 text-sm font-semibold transition-colors border rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white border-primary-600">
          23
        </li>
      </ul>

      <button className="flex items-center gap-2 px-6 py-2 text-white transition-colors rounded-full bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 hover:bg-primary-700">
        <span>Next</span>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </section>
  )
}

export default Pagination
