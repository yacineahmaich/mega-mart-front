import { useFeed } from '../../../features/client/home/feed'
import MainCategoryProducts from './MainCategoryProducts'
import SubCategories from './SubCategories'

const Products = () => {
  const {
    data: { feed },
  } = useFeed()

  return (
    <main>
      {feed.map(item => (
        <div className="p-2 space-y-10 md:p-6" key={item.mainCategory.id}>
          <MainCategoryProducts feedItem={item} />
          <SubCategories categories={item.mainCategory.categories} />
        </div>
      ))}
    </main>
  )
}

export default Products
