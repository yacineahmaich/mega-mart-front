import {
  BanknotesIcon,
  BoltIcon,
  CubeIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { FC } from 'react'
import Stat from './Stat'
type Props = {
  children?: React.ReactNode
}
const Stats: FC<Props> = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <Stat
          label="sales"
          value="$13,345"
          iconClass="text-green-600 bg-green-100"
          icon={BanknotesIcon}
        />
        <Stat
          label="orders"
          value="123"
          iconClass="text-blue-600 bg-blue-100"
          icon={CubeIcon}
        />
        <Stat
          label="customers"
          value="34"
          iconClass="text-lime-600 bg-lime-100"
          icon={UserIcon}
        />
        <Stat
          label="retention rate"
          value="42%"
          iconClass="text-slate-600 bg-slate-100"
          icon={BoltIcon}
        />
      </div>
    </div>
  )
}

export default Stats
