import { useMcategories } from '../../../features/client/main-category/m-categories'
import MainCategoryProducts from './MainCategoryProducts'
import SubCategories from './SubCategories'

const Products = () => {
  const { data: mainCategories } = useMcategories()

  return (
    <main>
      {mainCategories.map(category => (
        <div className="p-2 space-y-10 md:p-6" key={category.id}>
          <MainCategoryProducts category={category} />
          <SubCategories category={category} />
        </div>
      ))}
    </main>
  )
}

export default Products
