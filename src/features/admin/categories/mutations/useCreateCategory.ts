import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { categorySchema } from '../../../../utils/validation/admin/category'

type CategoryData = typeof categorySchema.__outputType

const createCategory = async (categoryData: CategoryData) => {
  try {
    // await new Promise(resolve => setTimeout(resolve, 50000))
    const response = await api.post('/categories', categoryData)

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useCreateCategory = (
  options?: UseMutationOptions<Product, Error, CategoryData>
) => {
  return useMutation<Product, Error, CategoryData>({
    mutationFn: createCategory,
    ...options,
  })
}
