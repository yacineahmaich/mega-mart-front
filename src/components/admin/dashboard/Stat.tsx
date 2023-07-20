import clsx from 'clsx'
import { FC } from 'react'
type Props = {
  children?: React.ReactNode
  label: string
  value: string | number
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'>
  >
  iconClass: string
}
const Stat: FC<Props> = ({ label, value, iconClass, icon: Icon }) => {
  return (
    <div className="flex items-center gap-3 p-6 border rounded border-gray">
      <div className={clsx('p-2 rounded-full', iconClass)}>
        <Icon className="w-10 h-10 duration-500 animate-in zoom-in-0" />
      </div>
      <div>
        <h5 className="text-xs font-bold uppercase text-dark-500">{label}</h5>
        <span className="text-2xl font-bold text-dark-700">{value}</span>
      </div>
    </div>
  )
}

export default Stat
