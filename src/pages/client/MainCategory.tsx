import { useParams } from 'react-router-dom'
import Cover from '../../components/client/main-category/Cover'
import ExploreCategories from '../../components/client/main-category/ExploreCategories'
import Products from '../../components/client/main-category/Products'
import Error from '../../components/client/ui/Error'
import { useMainCategoryFeed } from '../../features/client/main-category/feed'

const MainCategory = () => {
  const { slug } = useParams()
  const { isError } = useMainCategoryFeed(slug)

  if (isError) return <Error message="Failed to load data" />

  return (
    <div>
      <Cover />
      <div className="mx-3 -mt-20 md:mx-6">
        <ExploreCategories />
        <Products />
      </div>
    </div>
  )
}

export default MainCategory
