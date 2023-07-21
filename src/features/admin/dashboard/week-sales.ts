import { useQuery } from '@tanstack/react-query'
import api from '../../../utils/api/admin'

type Data = {
  day: string
  current: number
  prev: number
}[]

const getWeekSales = async (): Promise<Data> => {
  const response = await api.get('/week-sales')
  return response.data
}

export const query = () => ({
  queryKey: ['admin', 'week-sales'],
  queryFn: getWeekSales,
})

export const useWeekSales = () => {
  return useQuery({
    ...query(),
  })
}
