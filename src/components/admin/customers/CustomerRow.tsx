import { FC, useState } from 'react'
import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import { useDeleteCustomer } from '../../../features/admin/customers/mutations/useDeleteCustomer'
import CustomerModal from './CustomerModal'
import Actions from '../ui/Actions'
import ConfirmDelete from '../ui/ConfirmDelete'

type Props = {
  customer: User
}

const CustomerRow: FC<Props> = ({ customer }) => {
  const queryClient = useQueryClient()
  const [isShowDetails, setIsShowDetails] = useState(false)

  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteCustomer, isLoading: isDeleting } = useDeleteCustomer({
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'customers'])
      setIsConfirmOpen(false)
    },
  })

  const handleDelete = () => {
    deleteCustomer({ customerId: customer.id })
  }

  return (
    <tr
      key={customer.id}
      className="bg-white border-b last:border-none text-dark-600 border-light"
    >
      <td className="px-6 py-3">{customer.id}</td>
      <th scope="row" className="px-6 py-3 font-medium text-gray-900">
        <span>{customer.name}</span>
      </th>
      <td className="px-6 py-3">{customer.email}</td>
      <td className="flex items-center justify-center p-2">
        <Actions>
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={() => setIsShowDetails(true)}
          >
            <EyeIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">See details</span>
          </button>
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={() => setIsConfirmOpen(true)}
          >
            <TrashIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Delete account</span>
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
      <CustomerModal
        customer={customer}
        isOpen={isShowDetails}
        onClose={() => setIsShowDetails(false)}
      />
    </tr>
  )
}

export default CustomerRow
