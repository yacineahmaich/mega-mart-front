import { isAxiosError } from 'axios'
import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

const deleteCustomer = async ({ customerId }: { customerId: number }) => {
  try {
    await api.delete(`/customers/${customerId}`)
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useDeleteCustomer = (
  options?: UseMutationOptions<unknown, unknown, { customerId: number }>
) => {
  return useMutation<unknown, unknown, { customerId: number }>({
    mutationFn: deleteCustomer,
    ...options,
  })
}
