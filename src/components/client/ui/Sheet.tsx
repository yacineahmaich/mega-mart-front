import { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  children: React.ReactNode
  title: string
  isOpen: boolean
  onClose: () => void
}

const Sheet: FC<Props> = ({ title, isOpen, onClose, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[99999]" onClose={onClose}>
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
          <Dialog.Panel className="fixed top-0 right-0 flex flex-col h-screen max-h-[100dvh] max-w-full overflow-hidden transition-all transform bg-white shadow-xl w-[450px]">
            <header className="flex items-center justify-between px-5 py-2 border-b border-gray text-dark-600">
              <Dialog.Title as="h3" className="text-lg font-medium">
                {title}
              </Dialog.Title>
              <button onClick={onClose}>
                <XMarkIcon className="w-5 h-5" />
              </button>
            </header>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Sheet
