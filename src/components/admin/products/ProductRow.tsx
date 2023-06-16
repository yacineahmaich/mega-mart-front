import { FC, useState } from 'react'
import {
  ArrowTrendingDownIcon,
  GiftIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { useDeleteProduct } from '../../../features/admin/products/mutations/useDeleteProduct'
import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Actions from '../ui/Actions'
import ConfirmDelete from '../ui/ConfirmDelete'

type Props = {
  product: Product
}

const ProductRow: FC<Props> = ({ product }) => {
  const queryClient = useQueryClient()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteProduct({
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'products'])
      setIsConfirmOpen(false)
    },
  })

  const handleDelete = () => {
    deleteProduct({ productId: product.id })
  }

  const finalPrice = product.discount ? product.discount.price : product.price

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
      <td className="px-6 py-3">${finalPrice}</td>
      <td className="px-6 py-3">
        {product.discount ? `${product.discount.percentage}%` : <>&ndash;</>}
      </td>

      <td className="flex items-center justify-center p-2">
        <Actions>
          <Link
            to={`${product.id}/edit`}
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
          >
            <PencilIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Edit product</span>
          </Link>

          {product.offer ? (
            <Link
              to={`/dashboard/offers/${product.id}/edit`}
              className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            >
              <GiftIcon className="inline w-4 h-4 mr-4" />
              <span className="text-sm">Edit offer</span>
            </Link>
          ) : (
            <Link
              to={`/dashboard/offers/make/${product.id}`}
              className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            >
              <GiftIcon className="inline w-4 h-4 mr-4" />
              <span className="text-sm">Make offer</span>
            </Link>
          )}

          {product.discount ? (
            <Link
              to={`/dashboard/discounts/${product.discount.id}/edit`}
              className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            >
              <ArrowTrendingDownIcon className="inline w-4 h-4 mr-4" />
              <span className="text-sm">Edit discount</span>
            </Link>
          ) : (
            <Link
              to={`/dashboard/discounts/apply/${product.id}`}
              className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            >
              <ArrowTrendingDownIcon className="inline w-4 h-4 mr-4" />
              <span className="text-sm">Apply discount</span>
            </Link>
          )}
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={() => setIsConfirmOpen(true)}
          >
            <TrashIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Delete product</span>
          </button>
        </Actions>
      </td>
      <ConfirmDelete
        resourceName="product"
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />
    </tr>
  )
}

export default ProductRow
