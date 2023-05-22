import { FC, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import spinner from '../../../assets/icons/spinner.png'
import { useProducts } from '../../../features/admin/products/queries/useProducts'
import {
  ArrowPathIcon,
  CheckIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useDeleteProduct } from '../../../features/admin/products/mutations/useDeleteProduct'
import { useQueryClient } from '@tanstack/react-query'

const ProductsTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data, isFetching, isLoading } = useProducts(page, { enabled: false })

  return (
    <>
      {isFetching && !isLoading && (
        <div className="fixed left-1/2 top-4 flex items-center z-[99] gap-2 px-3 py-1 bg-white shadow">
          <img
            src={spinner}
            alt="spinner"
            className="w-4 h-4 mx-auto animate-spin"
          />
          <span className="text-sm font-bold">Loading...</span>
        </div>
      )}
      <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
        <table className="w-full text-sm text-left border text-dark-600 border-light ">
          <thead className="text-xs text-white uppercase bg-primary-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {data.products.map(product => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

type Props = {
  product: Product
}

const ProductRow: FC<Props> = ({ product }) => {
  const queryClient = useQueryClient()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteProduct, isLoading } = useDeleteProduct({
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
      setIsConfirmOpen(false)
    },
  })

  const handleDelete = () => {
    deleteProduct({ productId: product.id })
  }

  return (
    <tr
      key={product.id}
      className="bg-white border-b last:border-none text-dark-600 border-light"
    >
      <td className="px-6 py-3">{product.id}</td>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
      >
        {product.name}
      </th>
      <td className="px-6 py-3">{product.category.name}</td>
      <td className="px-6 py-3">{product.quantity}</td>
      <td className="px-6 py-3">{product.price}</td>

      <td className="space-x-3 text-center">
        {isConfirmOpen ? (
          <div className="flex items-center justify-center w-full h-full gap-3">
            <button onClick={handleDelete}>
              {isLoading ? (
                <ArrowPathIcon className="inline w-5 h-5 text-danger-100 animate-spin" />
              ) : (
                <CheckIcon className="inline w-5 h-5 text-danger-100" />
              )}
            </button>
            <button onClick={() => setIsConfirmOpen(false)}>
              <XMarkIcon className="inline w-5 h-5 text-dark-500" />
            </button>
          </div>
        ) : (
          <>
            <Link to={`${product.id}/edit`} className="text-info-100">
              <PencilSquareIcon className="inline w-5 h-5" />
            </Link>
            <button
              className="text-danger-100"
              onClick={() => setIsConfirmOpen(true)}
            >
              <TrashIcon className="inline w-5 h-5" />
            </button>
          </>
        )}
      </td>
    </tr>
  )
}

export default ProductsTable
