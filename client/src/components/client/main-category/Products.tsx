import { useParams } from 'react-router-dom'
import CategoryProducts from './CategoryProducts'
import { useMainCategoryFeed } from '../../../features/client/main-category/feed'

const Products = () => {
  const { slug } = useParams()
  const {
    data: { feed },
  } = useMainCategoryFeed(slug)

  return (
    <main>
      {feed.map(item => (
        <div className="p-2 space-y-10 md:p-6" key={item.category.id}>
          <CategoryProducts feedItem={item} />
        </div>
      ))}
    </main>
  )
}

export default Products
