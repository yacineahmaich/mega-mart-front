import { FC, ReactNode } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

type Props = {
  children?: ReactNode
  title: string
}

const DisclosureItem: FC<Props> = props => {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex items-center justify-between w-full px-4 py-3 text-xs rounded-lg text-dark-600 bg-light border border-gray outline-none ${
              open ? 'rounded-b-none border-b-0' : ''
            }`}
          >
            <span>{props.title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform transition-transform' : ''
              } h-4 w-4 text-dark-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={`px-4 pt-5 pb-3 rounded-b-lg text-sm text-gray-500 ${
              open ? 'border border-gray' : ''
            }`}
          >
            {props.children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default DisclosureItem
