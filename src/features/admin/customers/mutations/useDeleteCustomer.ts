import { isAxiosError } from 'axios'
import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

const deleteCustomer = async ({ customerId }: { customerId: string }) => {
  try {
    await api.delete(`/customers/${customerId}`)
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useDeleteCustomer = (
  options?: UseMutationOptions<unknown, unknown, { customerId: string }>
) => {
  return useMutation<unknown, unknown, { customerId: string }>({
    mutationFn: deleteCustomer,
    ...options,
  })
}
