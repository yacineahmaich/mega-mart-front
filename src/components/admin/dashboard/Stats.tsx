import {
  BanknotesIcon,
  BoltIcon,
  CubeIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Stat from './Stat'
import { useStoreStats } from '../../../features/admin/dashboard/store-stats'

const Stats = () => {
  const { data: stats } = useStoreStats()

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <Stat
          label="sales"
          value={`$${stats.sales}`}
          iconClass="text-green-600 bg-green-100"
          icon={BanknotesIcon}
        />
        <Stat
          label="orders"
          value={stats.orders}
          iconClass="text-blue-600 bg-blue-100"
          icon={CubeIcon}
        />
        <Stat
          label="customers"
          value={stats.customers}
          iconClass="text-lime-600 bg-lime-100"
          icon={UserIcon}
        />
        <Stat
          label="retention rate"
          value={`${stats.retentionRate}%`}
          iconClass="text-slate-600 bg-slate-100"
          icon={BoltIcon}
        />
      </div>
    </div>
  )
}

export default Stats
