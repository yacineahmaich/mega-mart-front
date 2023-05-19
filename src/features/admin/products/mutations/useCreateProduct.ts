import api from '../../../../utils/api/admin'
import { isAxiosError } from 'axios'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { productSchema } from '../../../../utils/validation/admin/product'

type ProductData = typeof productSchema.__outputType

const createProduct = async (productData: ProductData) => {
  try {
    // await new Promise(resolve => setTimeout(resolve, 50000))
    const response = await api.post('/products', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data
  } catch (error) {
    throw isAxiosError(error) ? error.response?.data : error
  }
}

export const useCreateProduct = (
  options?: UseMutationOptions<Product, Error, ProductData>
) => {
  return useMutation<Product, Error, ProductData>({
    mutationFn: createProduct,
    ...options,
  })
}
