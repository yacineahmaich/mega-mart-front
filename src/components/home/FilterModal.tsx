import { FC, Fragment } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/solid'

const categories = [
  {
    id: 1,
    name: 'Club',
  },
  {
    id: 2,
    name: 'National Team',
  },
]

type Props = {
  isOpen: boolean
  onClose: () => void
}

const FilterModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 md:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 pointer-events-none" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out transform duration-100"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="ease-in transform duration-100"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <Dialog.Panel className="fixed top-0 right-0 flex flex-col h-screen max-w-full overflow-hidden transition-all transform bg-white shadow-xl w-72">
            <div className="flex items-center justify-between px-5 py-2 border-b border-gray text-dark-600">
              <Dialog.Title as="h3" className="text-lg font-medium">
                Filter
              </Dialog.Title>

              <button onClick={onClose}>
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 space-y-3">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-1.5 text-sm font-medium text-left border rounded-md focus:outline-none border-gray">
                      <span>Category</span>
                      <ChevronUpIcon
                        className={`${
                          open
                            ? 'rotate-180 transition-transform transform'
                            : ''
                        } h-4 w-4`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <ul className="space-y-2">
                        {categories.map(cat => (
                          <li>
                            <label
                              htmlFor={cat.name}
                              className="space-x-3 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                id={cat.name}
                                name="categories"
                                value={cat.id}
                                className="rounded focus:ring-0"
                              />
                              <span>{cat.name}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-1.5 text-sm font-medium text-left border rounded-md focus:outline-none border-gray">
                      <span>Price</span>
                      <ChevronUpIcon
                        className={`${
                          open
                            ? 'rotate-180 transition-transform transform'
                            : ''
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
                            type="text"
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
                            type="text"
                            placeholder="Max"
                            className="w-full py-1 rounded-lg focus:ring-0 focus:border-black placeholder:text-sm form-input"
                          />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-1.5 text-sm font-medium text-left border rounded-md focus:outline-none border-gray">
                      <span>Assesemment</span>
                      <ChevronUpIcon
                        className={`${
                          open
                            ? 'rotate-180 transition-transform transform'
                            : ''
                        } h-4 w-4`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <div className="space-y-2">
                        <button className="flex">
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-gray" />
                          <StarIcon className="w-3 h-3 text-gray" />
                          <StarIcon className="w-3 h-3 text-gray" />
                          <StarIcon className="w-3 h-3 text-gray" />
                        </button>
                        <button className="flex">
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-gray" />
                          <StarIcon className="w-3 h-3 text-gray" />
                          <StarIcon className="w-3 h-3 text-gray" />
                        </button>
                        <button className="flex">
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-gray" />
                          <StarIcon className="w-3 h-3 text-gray" />
                        </button>
                        <button className="flex">
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-gray" />
                        </button>
                        <button className="flex">
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                        </button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default FilterModal
