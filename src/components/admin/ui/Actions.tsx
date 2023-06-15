import { FC, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
}

const Actions: FC<Props> = ({ children }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              'p-1 active:bg-light rounded focus:ring-2 focus:ring-slate-200',
              {
                'bg-light': open,
              }
            )}
          >
            <EllipsisVerticalIcon className="h-6 text-dark-600" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-50 mt-2 ">
              <div className="overflow-hidden rounded shadow-lg border border-gray  min-w-[130px] flex flex-col text-dark-500 bg-white">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Actions
