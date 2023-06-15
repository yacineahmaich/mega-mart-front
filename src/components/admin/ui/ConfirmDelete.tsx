import { Fragment, FC } from 'react'
import spinner from '../../../assets/icons/spinner.svg'
import { Dialog, Transition } from '@headlessui/react'
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type Props = {
  onClose: () => void
  isOpen: boolean
  resourceName: string
  onDelete: () => void
  isDeleting: boolean
  notes?: string[]
}

const ConfirmDelete: FC<Props> = ({
  isOpen,
  onClose,
  resourceName,
  onDelete,
  isDeleting,
  notes,
}) => {
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
          <div className="fixed inset-0 backdrop-blur-sm" />
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
              <Dialog.Panel className="relative w-full max-w-md p-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-sm shadow-xl">
                <Dialog.Title
                  as="h3"
                  className="mb-3 text-lg font-medium leading-6 text-gray-900"
                >
                  <span>Delete {resourceName}</span>
                </Dialog.Title>

                <button className="absolute top-3 right-3" onClick={onClose}>
                  <XMarkIcon className="w-6 h-6 text-dark-500" />
                </button>

                <div className="mt-2">
                  <p className="text-sm text-zinc-500">
                    Are you sure you want to delete this {resourceName}{' '}
                    permanently? This action cannot be undone.
                  </p>

                  <ul className="text-danger-300 text-sm font-medium">
                    {notes &&
                      notes.map((note, idx) => (
                        <li key={idx} className="first:mt-4">
                          <ExclamationTriangleIcon className="w-4 h-4 inline mr-1" />
                          <span>{note}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="flex justify-end mt-4 ml-auto space-x-3">
                  <button
                    type="button"
                    className="px-4 py-1 transition-colors bg-white border rounded hover:bg-light border-gray"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-1 text-white transition-colors border rounded border-gray bg-danger-600 hover:bg-danger-800"
                    onClick={onDelete}
                  >
                    {isDeleting && (
                      <img
                        src={spinner}
                        alt="spinner"
                        className="inline w-4 h-4 mr-1 animate-spin"
                      />
                    )}
                    <span>Delete</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ConfirmDelete
