import { useState, FC } from 'react'
import { Link } from 'react-router-dom'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useDeleteCategory } from '../../../features/admin/categories/useDeleteCategory'
import Actions from '../ui/Actions'
import ConfirmDelete from '../ui/ConfirmDelete'

type Props = {
  category: Category
}

const CategoryRow: FC<Props> = ({ category }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const { mutate: deleteCategory, isLoading: isDeleting } = useDeleteCategory()

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
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
      >
        {category.parentCategory.name}
      </th>
      <td className="px-6 py-3">{category.totalProducts}</td>

      <td className="flex items-center justify-center p-2">
        <Actions>
          <Link
            to={`${category.id}/edit`}
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
          >
            <PencilIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Edit category</span>
          </Link>
          <button
            className="px-6 py-2.5 text-left hover:bg-light whitespace-nowrap"
            onClick={() => setIsConfirmOpen(true)}
          >
            <TrashIcon className="inline w-4 h-4 mr-4" />
            <span className="text-sm">Delete category</span>
          </button>
        </Actions>
        <ConfirmDelete
          resourceName="category"
          isDeleting={isDeleting}
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onDelete={handleDelete}
          notes={
            category.totalProducts > 0 && [
              `(${category.totalProducts}) products under this category will be also deleted !`,
            ]
          }
        />
      </td>
    </tr>
  )
}

export default CategoryRow
