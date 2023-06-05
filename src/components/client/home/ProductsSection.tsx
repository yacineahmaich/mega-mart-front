import { useMcategories } from '../../../features/client/home/useMcategories'
import CategoryProducts from './CategoryProducts'
import SubCategories from './SubCategories'

const ProductsSection = () => {
  const { data: categories } = useMcategories()

  return (
    <main>
      {categories.map(category => (
        <div className="p-3 space-y-10 md:p-6" key={category.id}>
          <CategoryProducts category={category} />
          <SubCategories category={category} />
        </div>
      ))}
    </main>
  )
}

export default ProductsSection
