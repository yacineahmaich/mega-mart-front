import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  children: React.ReactNode
  title: string
  className?: string
}
const BlockLayout: FC<Props> = ({ title, children, className }) => {
  return (
    <section className="border rounded-lg border-gray">
      <div className="px-10 py-2 border-b border-r border-gray w-fit">
        <h4 className="font-medium text-dark-500">{title}</h4>
      </div>
      <main className={clsx('p-3 h-[350px]', className)}>{children}</main>
    </section>
  )
}

export default BlockLayout
