import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import spinner from '../../../assets/icons/spinner.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../../context/Cart'
import { useProducts } from '../../../features/client/products/queries/useProducts'
import Item from './Item'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Cart: FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const { items } = useCart()

  const { data, isLoading, isFetching } = useProducts({
    productIds: ['-1', ...Object.keys(items)],
  })

  const products = data?.products ?? []
  const totalAmount = products.reduce(
    (total, { id, price }) => price * items[id]?.quantity + total,
    0
  )

  const goToCart = () => {
    navigate('/cart')
    onClose()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
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

              {isLoading && (
                <div>
                  <img
                    src={spinner}
                    alt="spinner"
                    className="w-4 h-4 mx-auto animate-spin"
                  />
                </div>
              )}

              <button onClick={onClose}>
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            {/* products */}
            <div className="relative flex-1 px-5 py-3 overflow-x-hidden overflow-y-auto">
              {products.length === 0 && (
                <div className="p-2 bg-warning-400">
                  <p className="text-sm font-semibold text-danger-500">
                    You cart is empty right now!
                  </p>
                </div>
              )}

              {isFetching && (
                <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-light/40 backdrop-blur-sm">
                  <img
                    src={spinner}
                    alt="spinner"
                    className="w-12 h-12 animate-spin"
                  />
                </div>
              )}
              <ul className="divide-y divide-slate-300">
                {products?.map(product => (
                  <Item key={product.id} product={product} />
                ))}
              </ul>
            </div>

            {products.length > 0 && (
              <div className="p-6 space-y-4 bg-opacity-50 border-t border-gray bg-gray">
                <div className="flex items-center justify-between pb-3 text-sm font-medium text-dark-500">
                  <span>
                    Products: <span>{products.length}</span>
                  </span>
                  <span>
                    Total: $<span>{totalAmount}</span>
                  </span>
                </div>
                <div className="flex">
                  <button
                    className="w-full py-2 font-medium text-center text-white transition-colors duration-200 text-md bg-primary-600 hover:bg-primary-800"
                    onClick={goToCart}
                  >
                    Go To Cart
                  </button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Cart
