import {
  PresentationChartBarIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import StatisticCard from '../ui/StatisticCard'

const CategoriesStatistcis = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-10 bg-orange-500 py-14 mb-14">
      <StatisticCard
        label="Total Categories"
        value={6}
        icon={PuzzlePieceIcon}
        iconWrapperClassName="bg-info-500 ring-info-500/20"
      />
      <StatisticCard
        label="Averge products per quantity"
        value={11}
        icon={PresentationChartBarIcon}
        iconWrapperClassName="bg-danger-500 ring-danger-500/20"
      />
      <StatisticCard
        label="Total Categories"
        value={23}
        icon={RectangleGroupIcon}
        iconWrapperClassName="bg-warning-500 ring-warning-500/20"
      />
    </div>
  )
}

export default CategoriesStatistcis
