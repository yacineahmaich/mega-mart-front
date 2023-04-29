import {
  PresentationChartBarIcon,
  UserGroupIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import StatisticCard from '../StatisticCard'

const CategoriesStatistcis = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-10 bg-danger-600 py-14 mb-14">
      <StatisticCard
        label="Total Customers"
        value={1023}
        icon={UserGroupIcon}
        iconWrapperClassName="bg-info-500 ring-info-500/20"
      />
      <StatisticCard
        label="Averge orders per customer"
        value={3}
        icon={PresentationChartBarIcon}
        iconWrapperClassName="bg-danger-500 ring-danger-500/20"
      />
      <StatisticCard
        label="Total Customers"
        value={23}
        icon={RectangleGroupIcon}
        iconWrapperClassName="bg-warning-500 ring-warning-500/20"
      />
    </div>
  )
}

export default CategoriesStatistcis
