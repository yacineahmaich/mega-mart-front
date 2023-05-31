import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { productSchema } from '../../../../utils/validation/admin/product'

type ProductData = {
  id: number
  product: typeof productSchema.__outputType
}

const updateProduct = async (productData: ProductData) => {
  try {
    const response = await api.put(
      `/products/${productData.id}`,
      productData.product
    )

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useUpdateProduct = (
  options?: UseMutationOptions<Product, Error, ProductData>
) => {
  return useMutation<Product, Error, ProductData>({
    mutationFn: updateProduct,
    ...options,
  })
}
