import { FC } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination: FC = () => {
  return (
    <section className="flex items-center justify-center gap-3 md:gap-6 lg:gap-8">
      <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded-full md:px-6 bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 hover:bg-primary-700">
        <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm md:text-md">Prev</span>
      </button>

      <ul className="hidden gap-2 text-dark-700 md:flex">
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

      <select className="block text-sm rounded focus:ring-0 md:hidden">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded-full md:px-6 bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 hover:bg-primary-700">
        <span className="text-sm md:text-md">Next</span>
        <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </section>
  )
}

export default Pagination
