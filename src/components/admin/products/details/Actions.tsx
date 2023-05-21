import { FC, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useDeleteProduct } from '../../../../features/admin/products/mutations/useDeleteProduct'
import spinner from '../../../../assets/icons/spinner.svg'
import { toast } from 'react-hot-toast'

type Props = {
  product: Product
}

const Actions: FC<Props> = ({ product }) => {
  const navigate = useNavigate()
  const [isShowConfirm, setIsShowConfirm] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState(null)
  const isConfirmed = deleteConfirmation === product.slug
  const { mutate: deleteProduct, isLoading } = useDeleteProduct({
    onSuccess: () => {
      navigate('.', { relative: 'path' })
      toast.success('product deleted')
    },
  })

  const handleDeleteProduct = () => {
    if (!isConfirmed) return
    deleteProduct({ productId: product.id })
  }

  return (
    <>
      {/* Delete confirmation Modal */}
      <Transition appear show={isShowConfirm} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsShowConfirm(false)}
        >
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

          <div className="fixed inset-0">
            <div className="flex justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -translate-y-10"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-10"
              >
                <Dialog.Panel className="w-full max-w-md text-left align-middle transition-all transform bg-white rounded shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="px-4 py-2 font-medium border-b text-danger-500 border-gray"
                  >
                    Delele Confirmation
                  </Dialog.Title>
                  <div className="px-4 py-2 mt-2 text-sm font-medium text-dark-500">
                    to confirm, type
                    <span className="mx-1 bg-light">"{product.slug}"</span>
                    in the box below
                    <input
                      type="text"
                      value={deleteConfirmation}
                      onChange={e => setDeleteConfirmation(e.target.value)}
                      className="block py-0.5 focus:border-primary-600 rounded mt-1 focus:ring-primary-600 form-input"
                    />
                  </div>

                  <div className="px-4 my-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-1.5 text-sm font-medium border rounded bg-danger-300 border-danger-300 text-white disabled:border-light disabled:text-slate-400 disabled:bg-light"
                      onClick={handleDeleteProduct}
                      disabled={!isConfirmed}
                    >
                      {isLoading && (
                        <span className="h-4 text-white ">
                          <img
                            src={spinner}
                            alt="spinner"
                            className="inline w-4 mr-2 animate-spin"
                          />
                        </span>
                      )}
                      <span className="text-sm font-medium">
                        Delete Product
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <header>
        <div className="flex justify-between w-full">
          <span>&nbsp;</span>
          <div className="space-x-3">
            <Link
              to="edit"
              className="text-sm font-bold text-info-100 hover:underline"
            >
              EDIT
            </Link>
            <button
              className="text-sm font-bold text-danger-100"
              onClick={() => setIsShowConfirm(true)}
            >
              DELETE
            </button>
          </div>
        </div>

        <h1 className="max-w-lg mx-auto my-6 text-lg font-bold leading-8 text-center underline text-primary-600">
          <span className="px-6 py-2">{product.name}</span>
        </h1>
      </header>
    </>
  )
}

export default Actions
