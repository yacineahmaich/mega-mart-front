import { FC, useState, ChangeEvent, useEffect } from 'react'
import DisclosureItem from '../../../ui/DisclosureItem'
import { useSearchParams } from 'react-router-dom'
import { useCategories } from '../../../../features/client/categories/queries/useCategories'

const CategoryFilter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCatgegries, setSelectedCategories] = useState<string[]>(
    searchParams.get('cat')?.split(',') ?? []
  )
  const { data } = useCategories()

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

    if (!checked) {
      setSelectedCategories(prev => prev.filter(id => id !== catId))
      return
    }

    setSelectedCategories(prev => [...prev, catId])
  }

  useEffect(() => {
    setSearchParams(sp => {
      if (selectedCatgegries.length === 0) sp.delete('cat')
      else sp.set('cat', selectedCatgegries.join(','))

      return sp
    })
  }, [selectedCatgegries, setSearchParams])

  return (
    <DisclosureItem title="Category">
      <ul className="space-y-2">
        {data?.map(cat => (
          <li key={cat.id}>
            <label htmlFor={cat.name} className="space-x-3 cursor-pointer">
              <input
                type="checkbox"
                id={cat.name}
                value={cat.id}
                className="rounded focus:ring-0"
                onChange={e => handleSelectCategory(e, cat.id.toString())}
                checked={selectedCatgegries.includes(cat.id.toString())}
              />
              <span>{cat.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </DisclosureItem>
  )
}

export default CategoryFilter
