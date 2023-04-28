import { FC } from 'react'

type Props = {
  label: string
  value: string | number
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  className?: string
  iconWrapperClassName?: string
}

const StatisticCard: FC<Props> = ({
  label,
  value,
  icon: Icon,
  className,
  iconWrapperClassName,
}) => {
  return (
    <article
      className={`flex items-center gap-6 p-5 bg-white shadow-lg border-gray ${className}`}
    >
      <div
        className={`p-2 text-white rounded-full ring-8 ${iconWrapperClassName}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="font-bold text-dark-600 text-md">{value}</span>
      </div>
    </article>
  )
}

export default StatisticCard
