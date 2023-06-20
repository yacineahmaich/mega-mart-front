import { useParams } from 'react-router-dom'
import { useMCategory } from '../../../features/client/main-category/m-category'
import CategoryProducts from './CategoryProducts'

const ProductsSection = () => {
  const { slug } = useParams()
  const { data: mainCategory } = useMCategory(slug)

  return (
    <main>
      {mainCategory.categories.map(category => (
        <div className="p-2 space-y-10 md:p-6" key={category.id}>
          <CategoryProducts category={category} />
        </div>
      ))}
    </main>
  )
}

export default ProductsSection
