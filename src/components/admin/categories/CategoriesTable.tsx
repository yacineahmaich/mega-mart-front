import { FC } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCategories } from '../../../features/admin/categories/queries/useCategories'
import spinner from '../../../assets/icons/spinner.png'
import {
  ArrowPathIcon,
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useDeleteCategory } from '../../../features/admin/categories/mutations/useDeleteCategory'

const CategoriesTable = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const { data, isFetching, isLoading } = useCategories(page, {
    enabled: false,
  })

  return (
    <>
      {isFetching && !isLoading && (
        <div className="fixed left-1/2 top-4 flex items-center z-[99] gap-2 px-3 py-1 bg-white shadow">
          <img
            src={spinner}
            alt="spinner"
            className="w-4 h-4 mx-auto animate-spin"
          />
          <span className="text-sm font-bold">Loading...</span>
        </div>
      )}
      <section>
        <div className="relative overflow-hidden overflow-x-auto rounded-t-lg">
          <table className="w-full text-sm text-left border text-dark-600 border-light ">
            <thead className="text-xs text-white uppercase bg-warning-900">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Category name
                </th>
                <th scope="col" className="px-6 py-3">
                  Products per category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.categories.map(category => (
                <CategoryRow key={category.id} category={category} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

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

export default CategoriesTable
