import MainCategoriesSlider from '../../components/client/home/MainCategoriesSlider'
import OffersSlider from '../../components/client/home/OffersSlider'
import ProductsSection from '../../components/client/home/ProductsSection'
import { useMcategories } from '../../features/client/home/useMcategories'
import { useOffers } from '../../features/client/home/useOffers'

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
    return <div></div>

  return (
    <div>
      <OffersSlider />
      <MainCategoriesSlider />
      <ProductsSection />
    </div>
  )
}

export default Home
