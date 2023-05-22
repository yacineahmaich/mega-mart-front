import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { categorySchema } from '../../../../utils/validation/admin/category'

type CategoryData = {
  id: string
  category: typeof categorySchema.__outputType
}

const updateCategory = async (categoryData: CategoryData) => {
  try {
    const response = await api.put(
      `/categories/${categoryData.id}`,
      categoryData.category
    )

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useUpdateCategory = (
  options?: UseMutationOptions<Category, Error, CategoryData>
) => {
  return useMutation<Category, Error, CategoryData>({
    mutationFn: updateCategory,
    ...options,
  })
}
