import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import {
  XMarkIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { products } from '../utils/contants'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Cart: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
          <Dialog.Panel className="fixed top-0 right-0 flex flex-col h-screen max-h-[100dvh] max-w-full overflow-hidden transition-all transform bg-white shadow-xl w-minicart">
            <div className="flex items-center justify-between px-5 py-2 border-b border-gray text-dark-600">
              <Dialog.Title as="h3" className="text-xl font-medium">
                Cart
              </Dialog.Title>

              <button onClick={onClose}>
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            {/* products */}
            <div className="flex-1 px-5 py-3 overflow-y-auto">
              <ul className="divide-y divide-slate-300">
                {products.map(product => (
                  <li className="py-3" key={product.id}>
                    <div className="flex gap-4">
                      <div className="h-32 overflow-hidden w-28 rounded-xl">
                        <img
                          src={product.image}
                          alt={product.name}
                          title={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div className="flex gap-4">
                          <div>
                            <a href="#" className="leading-5 hover:underline">
                              <h3 className="font-medium text-dark-700 line-clamp-3 text-md">
                                {product.name}
                              </h3>
                            </a>
                            <span className="text-xs text-dark-500">
                              Added 3 days ago
                            </span>
                          </div>
                          <div>
                            <button>
                              <TrashIcon className="w-6 h-6 text-danger-500 hover:text-danger-900" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between w-full mt-auto">
                          <div className="flex">
                            <button className="px-4 border rounded-l-md border-light text-primary-400">
                              <PlusSmallIcon className="w-4 h-4" />
                            </button>
                            <input
                              defaultValue={product.quantity}
                              type="number"
                              className="w-14 py-1 border-[1px] outline-0 border-y border-x-0 focus:border-light font-medium text-dark-600 text-center  border-light"
                            />
                            <button className="px-4 border rounded-r-md border-light text-danger-400">
                              <MinusSmallIcon className="w-4 h-4 " />
                            </button>
                          </div>
                          <div>
                            <span className="text-lg font-bold text-primary-500">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 space-y-4 bg-opacity-50 border-t border-gray bg-gray">
              <div className="flex items-center justify-between pb-3 text-sm font-medium text-dark-500">
                <span>
                  Products: <span>3</span>
                </span>
                <span>
                  Total: $<span>342</span>
                </span>
              </div>
              <div className="flex">
                <a
                  href="#"
                  className="w-full py-2 font-medium text-center text-white transition-colors duration-200 text-md bg-primary-600 hover:bg-primary-800"
                >
                  Go To Cart
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Cart
