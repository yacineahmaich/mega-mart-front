import { useState, useEffect, ChangeEvent, memo } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'react-router-dom'
import { useCategories } from '../../../../features/client/categories/queries'

const CategoryFilterSidebar = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('cat')?.split(',') ?? []
  )
  const { data } = useCategories()
  const categories = data?.data

  const handleSelectCategory = (
    e: ChangeEvent<HTMLInputElement>,
    catId: string
  ) => {
    const checked = e.target.checked

    // reset pagination
    setSearchParams(sp => {
      sp.delete('page')
      return sp
    })

    setSelectedCategories(selected =>
      checked ? [...selected, catId] : selected.filter(id => id !== catId)
    )
  }
  console.log(selectedCategories)
  useEffect(() => {
    setSearchParams(sp => {
      if (selectedCategories.length === 0) sp.delete('cat')
      else sp.set('cat', selectedCategories.join(','))

      return sp
    })
  }, [selectedCategories, setSearchParams])

  console.log('re-rendered')

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-1.5 text-sm font-medium text-left border rounded-md focus:outline-none border-gray">
            <span>Category</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transition-transform transform' : ''
              } h-4 w-4`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <ul className="space-y-2">
              {categories?.map(cat => (
                <li key={cat.id}>
                  <label
                    htmlFor={cat.name}
                    className="space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={cat.name}
                      value={cat.id}
                      className="rounded focus:ring-0"
                      onChange={e => handleSelectCategory(e, cat.id.toString())}
                      checked={selectedCategories.includes(cat.id.toString())}
                    />
                    <span>{cat.name}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
})

export default CategoryFilterSidebar
