import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import React from 'react'

const PriceFilterSidebar = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-1.5 text-sm font-medium text-left border rounded-md focus:outline-none border-gray">
            <span>Price</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transition-transform transform' : ''
              } h-4 w-4`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
                  USD
                </span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
                />
              </div>
              <div>-</div>
              <div className="relative">
                <span className="absolute top-0 text-[10px] px-1 -translate-y-1/2 bg-white left-2">
                  USD
                </span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
                />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default PriceFilterSidebar
