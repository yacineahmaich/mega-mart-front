import { FC, ReactNode, Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
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
            className={`flex items-center justify-between w-full px-4 py-3 text-xs rounded-lg text-dark-600 bg-gray hover:bg-purple-200   ${
              open ? 'rounded-b-none focus:outline-none' : ''
            }`}
          >
            <span>{props.title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-4 w-4 text-dark-500`}
            />
          </Disclosure.Button>
          <Transition
            as={Fragment}
            enter="tranistion"
            enterFrom="transition -translate-y-2"
            enterTo="transition translate-y-0 duration-200"
          >
            <Disclosure.Panel
              className={`px-4 pt-5 pb-3 rounded-b-lg text-sm text-gray-500 ${
                open ? 'border border-gray' : ''
              }`}
            >
              {props.children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default DisclosureItem
