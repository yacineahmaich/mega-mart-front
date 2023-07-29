import api from '../../../utils/api/admin'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
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

const updateProduct = async (productData: Variables): Promise<Product> => {
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

export const useUpdateProduct = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProduct,
    onSuccess() {
      queryClient.invalidateQueries(['admin', 'products'])
      navigate('/dashboard/products')
      toast.success('Product updated successfully')
    },
    onError: () => {
      toast.error('Could not update Product')
    },
  })
}
