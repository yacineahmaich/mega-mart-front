import { FC, useState } from 'react'
import {
  ArrowPathIcon,
  CheckIcon,
  ChevronUpDownIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import { useDeleteCustomer } from '../../../features/admin/customers/mutations/useDeleteCustomer'
import CustomerModal from './CustomerModal'

type Props = {
  customer: User
}

const CustomerRow: FC<Props> = ({ customer }) => {
  const queryClient = useQueryClient()
  const [isShowDetails, setIsShowDetails] = useState(false)

  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteCustomer, isLoading } = useDeleteCustomer({
    onSuccess: () => {
      queryClient.invalidateQueries(['customers'])
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
      <td className="space-x-3 text-center">
        {isConfirmOpen ? (
          <div className="flex items-center justify-center w-full h-full gap-3">
            <button onClick={handleDelete} disabled={isLoading}>
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
            <button
              className="group text-primary-900"
              onClick={() => setIsShowDetails(true)}
            >
              <ChevronUpDownIcon className="inline w-5 h-5 mr-1" />
            </button>
            <button
              className="text-danger-100"
              onClick={() => setIsConfirmOpen(true)}
            >
              <TrashIcon className="inline w-5 h-5" />
            </button>
          </>
        )}
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
