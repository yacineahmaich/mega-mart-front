import { FC } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'react-router-dom'

type Props = {
  meta: {
    current_page: number
    per_page: number
    last_page: number
  }
}

const maxPagItems = 5

const Pagination: FC<Props> = ({ meta }) => {
  const [_, setSearchParams] = useSearchParams()
  const numPages = meta.last_page
  const activePage = meta.current_page

  const goToPage = (page: number) => {
    scrollTo({ top: 0, behavior: 'smooth' })
    setSearchParams(sp => {
      sp.set('page', page.toString())
      return sp
    })
  }

  const goToPrevPage = () => {
    if (activePage === 1) return

    scrollTo({ top: 0, behavior: 'smooth' })

    setSearchParams(sp => {
      sp.set('page', (activePage - 1).toString())
      return sp
    })
  }
  const goToNextPage = () => {
    if (activePage === numPages) return

    scrollTo({ top: 0, behavior: 'smooth' })

    setSearchParams(sp => {
      sp.set('page', (activePage + 1).toString())
      return sp
    })
  }

  return (
    <section className="flex items-center justify-center gap-3 my-10 md:my-16 lg:my-20 lg:gap-4">
      {activePage > 1 && (
        <button
          className="flex items-center gap-1 px-4 py-1.5 lg:py-2 text-white transition-colors rounded-full lg:px-6 bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 hover:bg-primary-700"
          onClick={goToPrevPage}
        >
          <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-md">Prev</span>
        </button>
      )}

      <ul className="items-center hidden gap-2 text-dark-700 md:flex">
        {Array.from(
          {
            length: numPages > maxPagItems ? maxPagItems : numPages,
          },
          (_, i) => {
            const page = i + 1

            return (
              <li
                key={page}
                className={`flex items-center justify-center w-8 h-8 text-sm font-semibold transition-colors border rounded-lg cursor-pointer lg:h-10 lg:w-10  border-primary-600 ${
                  page === activePage
                    ? 'bg-primary-600 text-white'
                    : 'hover:bg-primary-600 hover:text-white'
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </li>
            )
          }
        )}
        {numPages > maxPagItems && (
          <>
            {maxPagItems + 1 < numPages && (
              <li className="flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded-lg pointer-events-none lg:h-10 lg:w-10 border-slate-400 text-slate-400">
                ...
              </li>
            )}
            <li
              className={`flex items-center justify-center w-8 h-8 text-sm font-semibold transition-colors border rounded-lg cursor-pointer lg:h-10 lg:w-10  border-primary-600 ${
                activePage === numPages
                  ? 'bg-primary-600 text-white'
                  : 'hover:bg-primary-600 hover:text-white'
              }`}
              onClick={() => goToPage(numPages)}
            >
              {numPages}
            </li>
          </>
        )}
      </ul>

      <select className="block text-sm rounded focus:border-gray form-select focus:ring-0 md:hidden">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      {activePage < numPages && (
        <button
          className="flex items-center gap-1 px-4 py-1.5 lg:py-2 text-white transition-colors rounded-full lg:px-6 bg-primary-600 active:ring active:ring-primary-500 active:ring-offset-1 hover:bg-primary-700"
          onClick={goToNextPage}
        >
          <span className="text-sm md:text-md">Next</span>
          <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
    </section>
  )
}

export default Pagination
