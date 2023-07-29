import { toast } from 'react-hot-toast'
import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Variables = {
  customerId: number
}

const deleteCustomer = async ({ customerId }: Variables) => {
  await api.delete(`/customers/${customerId}`)
}

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteCustomer,
    onSuccess: async () => {
      await queryClient.invalidateQueries(['admin', 'customers'])
      toast.success('Customer deleted successfully')
    },
    onError: () => {
      toast.error('Could not delete Customer')
    },
  })
}
