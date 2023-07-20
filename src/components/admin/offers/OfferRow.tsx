import { FC, useState } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { useDeleteOffer } from '../../../features/admin/offers/useDeleteOffer'
import Actions from '../ui/Actions'
import ConfirmDelete from '../ui/ConfirmDelete'

type Props = {
  offer: Offer
}

const OfferRow: FC<Props> = ({ offer }) => {
  const queryClient = useQueryClient()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteOffer({
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'offers'])
      setIsConfirmOpen(false)
    },
  })

  const handleDelete = () => {
    deleteProduct({ offerId: offer.id })
  }

  return (
    <tr
      key={offer.id}
      className="bg-white border-b last:border-none text-dark-600 border-light"
    >
      <td className="px-6 py-3">{offer.id}</td>
      <td className="px-6 py-3">{offer.start}</td>
      <td className="px-6 py-3">{offer.end}</td>
      <th className="px-6 py-3">
        <Link
          to={`/dashboard/products/${offer.product.id}/edit`}
          className="text-sm hover:underline hover:text-dark-600 text-dark-500"
        >
          {offer.product.name}
        </Link>
      </th>

      <td className="flex items-center justify-center p-2">
        <Actions>
          <Link
            to={`${offer.id}/edit`}
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
          >
            <PencilIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Edit offer</span>
          </Link>
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={() => setIsConfirmOpen(true)}
          >
            <TrashIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Delete offer</span>
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

export default OfferRow
