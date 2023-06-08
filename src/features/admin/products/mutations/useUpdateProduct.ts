import api from '../../../../utils/api/admin'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { editProductSchema } from '../../../../utils/validation/admin/product'

type ProductData = {
  id: number
  product: typeof editProductSchema.__outputType
}

const updateProduct = async (productData: ProductData) => {
  const response = await api.post(
    `/products/${productData.id}`,
    productData.product,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        // to make file upload work in laravel api
        _method: 'PUT',
      },
    }
  )

  return response.data
}

export const useUpdateProduct = (
  options?: UseMutationOptions<Product, Error, ProductData>
) => {
  return useMutation<Product, Error, ProductData>({
    mutationFn: updateProduct,
    ...options,
  })
}
