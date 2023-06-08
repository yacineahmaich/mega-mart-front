import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { createProductSchema } from '../../../../utils/validation/admin/product'

type ProductData = typeof createProductSchema.__outputType

const createProduct = async (productData: ProductData) => {
  const response = await api.post('/products', productData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const useCreateProduct = (
  options?: UseMutationOptions<Product, Error, ProductData>
) => {
  return useMutation<Product, Error, ProductData>({
    mutationFn: createProduct,
    ...options,
  })
}
