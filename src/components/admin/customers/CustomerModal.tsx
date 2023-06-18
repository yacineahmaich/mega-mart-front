import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { createPortal } from 'react-dom'
import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onClose: () => void
  customer: User
}

const CustomerModal: FC<Props> = ({ isOpen, onClose, customer }) => {
  const totalOrders = customer?.orders?.length ?? 0

  const completedOrders =
    customer.orders.filter(order => order.delivered && order.status === 'paid')
      ?.length ?? 0

  const spentedAmount = customer.orders.reduce(
    (total, order) => total + order.totalPrice,
    0
  )

  return createPortal(
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 overflow-y-auto top-6">
                <Dialog.Panel className="w-full max-w-lg p-6 mx-auto overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between pb-3 text-lg font-medium leading-6 text-gray-900 border-b border-light"
                  >
                    Customer Details # {customer.id}
                    <button onClick={onClose}>
                      <XMarkIcon className="w-5 h-5 text-gray hover:text-dark-500" />
                    </button>
                  </Dialog.Title>
                  <div className="py-5 space-y-6">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 overflow-hidden rounded-full shadow-md bg-light">
                        <img
                          src={customer.avatar?.url}
                          alt={customer.avatar?.name}
                          className="w-full h-full transition-transform duration-300 objec-cover hover:scale-110 hover:rotate-1"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-dark-500">
                          {customer.name}
                        </h3>
                        <small className="font-medium">{customer.email}</small>
                      </div>
                      <div className="ml-auto">
                        <div className="px-3 text-white rounded-full shadow bg-primary-400">
                          <small>{customer.createdAt}</small>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2">
                      <div className="flex flex-col gap-1 font-medium text-center text-danger-400 ">
                        <div className="px-2 py-1 text-sm ">
                          <ShoppingCartIcon className="inline w-5 h-5 mr-2 " />
                          <span>Total Orders</span>
                        </div>
                        <span className="text-dark-600">{totalOrders}</span>
                      </div>
                      <div className="flex flex-col gap-1 font-medium text-center text-blue-400 ">
                        <div className="px-2 py-1 text-sm">
                          <CheckBadgeIcon className="inline w-5 h-5 mr-2 " />
                          <span>Completed Orders</span>
                        </div>
                        <span className="text-dark-600">{completedOrders}</span>
                      </div>
                      <div className="flex flex-col gap-1 font-medium text-center text-green-400">
                        <div className="px-2 py-1 text-sm ">
                          <CurrencyDollarIcon className="inline w-5 h-5 mr-2 " />
                          <span>Spented Amount</span>
                        </div>
                        <span className="text-dark-600">$ {spentedAmount}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-500">
                        &gt; last orders
                      </h3>
                      <div>
                        <table className="w-full">
                          <thead>
                            <tr className="text-sm text-white bg-orange-200">
                              <th className="px-3">#</th>
                              <th className="px-3 text-center">STATUS</th>
                              <th className="px-3 text-center">TOTAL</th>
                            </tr>
                          </thead>
                          <tbody>
                            {customer.orders.map(order => (
                              <tr key={order.id} className="text-sm">
                                <td className="p-2">{order.id}</td>
                                <td
                                  className={clsx('font-semibold text-center', {
                                    'text-green-400': order.status === 'paid',
                                    'text-danger-400':
                                      order.status === 'unpaid',
                                  })}
                                >
                                  {order.status}
                                </td>

                                <td className="font-semibold text-center text-dark-500">
                                  $ {order.totalPrice}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>,
    document.getElementById('dialog')
  )
}

export default CustomerModal
