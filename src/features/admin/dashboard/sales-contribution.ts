import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Data = {
  name: string
  sales: number
}[]

const getSalesContribution = async (): Promise<Data> => {
  const response = await api.get('/sales-contribution')
  return response.data
}

export const query = () => ({
  queryKey: ['admin', 'sales-contribution'],
  queryFn: getSalesContribution,
})

export const useSalesContribution = () => {
  return useQuery({
    ...query(),
  })
}
