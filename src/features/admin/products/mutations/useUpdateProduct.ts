import api from '../../../../utils/api/admin'
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type Variables = {
  id: number
  product: {
    name: string
    price: string | number
    quantity: string | number
    category: string | number
    description: string
    images: File[]
  }
}

const updateProduct = async (productData: Variables) => {
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
  options?: UseMutationOptions<Product, Error, Variables>
) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<Product, Error, Variables>({
    mutationFn: updateProduct,
    onSuccess(_, { id }) {
      queryClient.invalidateQueries(['products', id.toString()])
      navigate('/dashboard/products')
    },
    ...options,
  })
}
