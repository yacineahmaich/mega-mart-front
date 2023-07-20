import { useParams } from 'react-router-dom'
import { useMCategory } from '../../features/client/main-category/m-category'
import Cover from '../../components/client/main-category/Cover'
import ExploreCategories from '../../components/client/main-category/ExploreCategories'
import Products from '../../components/client/main-category/Products'
import Error from '../../components/client/ui/Error'

const MainCategory = () => {
  const { slug } = useParams()
  const { isError } = useMCategory(slug)

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
