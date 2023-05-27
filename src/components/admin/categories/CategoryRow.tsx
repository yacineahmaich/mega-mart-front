import { useState, FC } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowPathIcon,
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import { useDeleteCategory } from '../../../features/admin/categories/mutations/useDeleteCategory'

type Props = {
  category: Category
}

const CategoryRow: FC<Props> = ({ category }) => {
  const queryClient = useQueryClient()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteCategory, isLoading } = useDeleteCategory({
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      setIsConfirmOpen(false)
    },
  })

  const handleDelete = () => {
    deleteCategory({ categoryId: category.id })
  }

  return (
    <tr
      key={category.id}
      className="bg-white border-b last:border-none text-dark-600 border-light"
    >
      <td className="px-6 py-3">{category.id}</td>
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
      >
        {category.name}
      </th>
      <td className="px-6 py-3">{category.totalProducts}</td>

      <td className="space-x-3 text-center">
        {isConfirmOpen ? (
          <div className="flex items-center justify-center w-full h-full gap-3">
            <button onClick={handleDelete}>
              {isLoading ? (
                <ArrowPathIcon className="inline w-5 h-5 text-danger-100 animate-spin" />
              ) : (
                <CheckIcon className="inline w-5 h-5 text-danger-100" />
              )}
            </button>
            <button onClick={() => setIsConfirmOpen(false)}>
              <XMarkIcon className="inline w-5 h-5 text-dark-500" />
            </button>
          </div>
        ) : (
          <>
            <Link to={`${category.id}/edit`} className="text-info-100">
              <PencilSquareIcon className="inline w-5 h-5" />
            </Link>
            <button
              className="text-danger-100"
              onClick={() => setIsConfirmOpen(true)}
            >
              <TrashIcon className="inline w-5 h-5" />
            </button>
          </>
        )}
      </td>
    </tr>
  )
}

export default CategoryRow
