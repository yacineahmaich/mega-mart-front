import MainCategoriesSlider from '../../components/client/home/MainCategoriesSlider'
import OffersSlider from '../../components/client/home/OffersSlider'
import ProductsSection from '../../components/client/home/ProductsSection'
import { useMcategories } from '../../features/client/main-category/useMcategories'
import { useOffers } from '../../features/client/home/useOffers'
import Spinner from '../../components/client/ui/Spinner'

const Home = () => {
  const { isLoading: isOffersLoading, isError: isOffersError } = useOffers()
  const { isLoading: isMcategoriesLoading, isError: isMcategoriesError } =
    useMcategories()

  if (
    isOffersLoading ||
    isMcategoriesLoading ||
    isOffersError ||
    isMcategoriesError
  )
    return (
      <div className="mt-6">
        <Spinner />
      </div>
    )

  return (
    <div>
      <OffersSlider />
      <MainCategoriesSlider />
      <ProductsSection />
    </div>
  )
}

export default Home
