import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const CategoryFilterSidebar = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-1.5 text-sm font-medium text-left border rounded-md focus:outline-none border-gray">
            <span>Category</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transition-transform transform' : ''
              } h-4 w-4`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500"></Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default CategoryFilterSidebar
