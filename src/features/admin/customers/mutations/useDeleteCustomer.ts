import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

type Variables = {
  customerId: number
}

const deleteCustomer = async ({ customerId }: Variables) => {
  await api.delete(`/customers/${customerId}`)
}

export const useDeleteCustomer = (
  options?: UseMutationOptions<unknown, unknown, Variables>
) => {
  return useMutation<unknown, unknown, Variables>({
    mutationFn: deleteCustomer,
    ...options,
  })
}
