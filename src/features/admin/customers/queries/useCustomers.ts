import api from '../../../../utils/api/admin'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type Data = {
  customers: User[]
  meta: {
    current_page: number
    per_page: number
    last_page: number
    from: number
    to: number
    total: number
  }
}

const getCustomers = async (page: string) => {
  const reponse = await api.get('/customers?page=' + page)

  return reponse.data
}

export const useCustomers = (
  page?: string,
  options?: UseQueryOptions<Data>
) => {
  return useQuery<Data>({
    queryKey: ['customers', { page }],
    queryFn: () => getCustomers(page),
    keepPreviousData: true,
    refetchOnMount: true,
    ...options,
  })
}
