import { useParams } from 'react-router-dom'
import { useMCategory } from '../../features/client/main-category/useMCategory'
import Cover from '../../components/client/main-category/Cover'
import ExploreCategories from '../../components/client/main-category/ExploreCategories'
import ProductsSection from '../../components/client/main-category/ProductsSection'

const MainCategory = () => {
  const { slug } = useParams()
  const { isLoading } = useMCategory(slug)

  if (isLoading) return <div></div>

  return (
    <div>
      <Cover />
      <main className="mx-3 -mt-20 md:mx-6">
        <ExploreCategories />
        <ProductsSection />
      </main>
    </div>
  )
}

export default MainCategory
