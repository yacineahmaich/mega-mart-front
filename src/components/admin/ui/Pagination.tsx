import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pagination as Paginex } from 'react-laravel-paginex'

type Props = {
  // eslint-disable-next-line
  data: any
  theme?: string
}

const Pagination: FC<Props> = ({ data, theme = 'primary-600' }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const onPaginate = ({ page }) => {
    searchParams.set('page', page)
    setSearchParams(searchParams)
  }

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <span className="text-sm font-normal text-dark-600 ">
        Showing&nbsp;
        <span className="font-semibold text-gray-900">
          {data.meta.from}-{data.meta.to}&nbsp;
        </span>
        of&nbsp;
        <span className="font-semibold text-gray-900">
          {data.meta.total}&nbsp;
        </span>
      </span>
      <Paginex
        data={data}
        options={{
          containerClass: 'flex space-x-px',
          numberButtonClass: `overflow-hidden relative py-1.5 text-dark-500 bg-white border text-dark-600 rounded-lg border-gray w-fit hover:bg-${theme} hover:text-white`,
          numberClass: `px-3 font-medium py-1.5`,
          prevButtonClass: `py-1.5  bg-white border rounded-lg text-dark-600 border-gray hover:bg-${theme} hover:text-white`,
          nextButtonClass: `py-1.5  bg-white border rounded-lg text-dark-600 border-gray hover:bg-${theme} hover:text-white`,
          activeClass: `after:absolute after:w-full after:h-0.5 after:rounded-t-lg after:bg-dark-500 after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2`,
          prevButtonText: `<`,
          nextButtonText: `>`,
        }}
        changePage={onPaginate}
      />
    </div>
  )
}

export default Pagination
