import { useParams } from 'react-router-dom'
import ExploreCategories from '../../components/client/main-category/ExploreCategories'
import Products from '../../components/client/main-category/Products'
import Error from '../../components/client/ui/Error'
import { useMainCategoryFeed } from '../../features/client/main-category/feed'
import OffersSlider from '../../components/client/home/OffersSlider'
import Navigation from '../../components/client/Navigation'
import { RectangleStackIcon } from '@heroicons/react/24/outline'

const MainCategory = () => {
  const { slug } = useParams()
  const { isError, data } = useMainCategoryFeed(slug)

  if (isError) return <Error message="Failed to load data" />

  return (
    <div>
      <Navigation
        breadcrumb={[
          {
            href: `/mc/${data?.mainCategory?.slug}`,
            label: data?.mainCategory?.name,
            icon: RectangleStackIcon,
          },
        ]}
      />
      <OffersSlider />
      <div className="mx-3 -mt-10 md:mx-6">
        <ExploreCategories />
        <Products />
      </div>
    </div>
  )
}

export default MainCategory
