import {
  ArrowTrendingDownIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import StatisticCard from '../ui/StatisticCard'

const OrdersStatistics = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-10 bg-cyan-600 py-14 mb-14">
      <StatisticCard
        label="Total Products"
        value={3020}
        icon={RectangleGroupIcon}
        iconWrapperClassName="bg-info-500 ring-info-500/20"
      />
      <StatisticCard
        label="Quantity alert"
        value={30}
        icon={ArrowTrendingDownIcon}
        iconWrapperClassName="bg-danger-500 ring-danger-500/20"
      />
      <StatisticCard
        label="Total Products"
        value={3020}
        icon={RectangleGroupIcon}
        iconWrapperClassName="bg-warning-500 ring-warning-500/20"
      />
    </div>
  )
}

export default OrdersStatistics
