import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import useRequireAuthModalState from '../../../store/requireAuth'

const RequireAuthModal = () => {
  const { isOpen, close } = useRequireAuthModalState()

  return createPortal(
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
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
              enterFrom="opacity-0 -translate-y-1/2"
              enterTo="opacity-100 translate-y-0"
              leave="duration-0"
            >
              <Dialog.Panel className="relative w-full max-w-md p-8 overflow-hidden text-left transition-all bg-white rounded shadow-xl">
                <button className="absolute right-3 top-3" onClick={close}>
                  <XMarkIcon className="w-5 h-5 text-dark-500" />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-dark-700"
                >
                  <ExclamationTriangleIcon className="inline w-5 h-5 mr-1" />{' '}
                  You need to be logged in to proced !
                </Dialog.Title>
                <div className="mt-3 space-y-6">
                  <p className="text-dark-500">
                    login to your account or create one first.
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      to="/account/login"
                      className="w-full text-center py-1.5 font-semibold text-white rounded-full bg-primary-500"
                      onClick={close}
                    >
                      Login
                    </Link>
                    <Link
                      to="/account/signup"
                      className="w-full text-center py-1.5 font-semibold border rounded-full text-primary-500 border-primary-500"
                      onClick={close}
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>,
    document.querySelector('#dialog')
  )
}

export default RequireAuthModal
