import { FC, useState } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Actions from '../ui/Actions'
import ConfirmDelete from '../ui/ConfirmDelete'
import { useDeleteDiscount } from '../../../features/admin/discounts/useDeleteDiscount'

type Props = {
  discount: Discount
}

const DiscountRow: FC<Props> = ({ discount }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteDiscount()

  const handleDelete = () => {
    deleteProduct({ discountId: discount.id })
  }

  return (
    <tr
      key={discount.id}
      className="bg-white border-b last:border-none text-dark-600 border-light"
    >
      <td className="px-6 py-3">{discount.id}</td>
      <td className="px-6 py-3">{discount.start}</td>
      <td className="px-6 py-3">{discount.end}</td>
      <th className="px-6 py-3">
        <Link
          to={`/dashboard/products/${discount.product.id}/edit`}
          className="text-sm hover:underline hover:text-dark-600 text-dark-500"
        >
          {discount.product.name}
        </Link>
      </th>

      <td className="px-6 py-3">{discount.percentage} %</td>

      <td className="flex items-center justify-center p-2">
        <Actions>
          <Link
            to={`${discount.id}/edit`}
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
          >
            <PencilIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Edit discount</span>
          </Link>
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={() => setIsConfirmOpen(true)}
          >
            <TrashIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Delete discount</span>
          </button>
        </Actions>
        <ConfirmDelete
          resourceName="category"
          isDeleting={isDeleting}
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onDelete={handleDelete}
        />
      </td>
    </tr>
  )
}

export default DiscountRow
