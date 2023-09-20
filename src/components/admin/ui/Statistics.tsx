import {
  ArrowDownIcon,
  CurrencyDollarIcon,
  RectangleGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import StatisticCard from './StatisticCard'
import { useState } from 'react'
import clsx from 'clsx'
import { useSharedStats } from '../../../features/admin/dashboard/useSharedStats'

function Statistics() {
  const [open, setOpen] = useState(true)

  const { data } = useSharedStats()

  return (
    <>
      <div className={clsx('flex justify-end', { 'mb-2': !open })}>
        <button
          className=" bg-white p-1 border border-slate-100"
          onClick={() => setOpen(open => !open)}
        >
          {open ? (
            <XMarkIcon className="w-3 h-3" />
          ) : (
            <ArrowDownIcon className="w-3 h-3" />
          )}
        </button>
      </div>
      {open && (
        <div className="relative grid grid-cols-3 gap-6 px-10 bg-primary-500 py-14 mb-14">
          <StatisticCard
            label="Total Sales"
            value={`$${data?.totalSales}` ?? '***'}
            icon={CurrencyDollarIcon}
            iconWrapperClassName="bg-info-500 ring-info-500/20"
          />
          <StatisticCard
            label="Total Products"
            value={data?.totalProducts ?? '***'}
            icon={RectangleGroupIcon}
            iconWrapperClassName="bg-red-500 ring-red-500/20"
          />
          <StatisticCard
            label="Total Orders"
            value={data?.totalOrders ?? '***'}
            icon={RectangleGroupIcon}
            iconWrapperClassName="bg-slate-500 ring-slate-500/20"
          />
        </div>
      )}
    </>
  )
}

export default Statistics
