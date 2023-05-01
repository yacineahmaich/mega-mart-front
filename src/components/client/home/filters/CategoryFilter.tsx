import { FC, useEffect, useState, ChangeEvent } from 'react'
import DisclosureItem from '../../../UI/DisclosureItem'
import useParams from '../../../../hooks/useParams'

const categories = [
  {
    id: 1,
    name: 'Club',
  },
  {
    id: 2,
    name: 'National Team',
  },
]

const CategoryFilter: FC = () => {
  const [selectedCatgegries, setSelectedCategories] = useState([])
  const changeParams = useParams()

  const handleSelectCategory = (
    e: ChangeEvent<HTMLInputElement>,
    catId: number
  ) => {
    const checked = e.target.checked

    if (!checked)
      return setSelectedCategories(prev => prev.filter(id => id !== catId))
    else setSelectedCategories(prev => [...prev, catId])
  }

  useEffect(() => {
    changeParams('category', selectedCatgegries.join(','))
  }, [selectedCatgegries, changeParams])

  return (
    <DisclosureItem title="Category">
      <ul className="space-y-2">
        {categories.map(cat => (
          <li key={cat.id}>
            <label htmlFor={cat.name} className="space-x-3 cursor-pointer">
              <input
                type="checkbox"
                id={cat.name}
                name="categories"
                value={cat.id}
                className="rounded focus:ring-0"
                onChange={e => handleSelectCategory(e, cat.id)}
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
