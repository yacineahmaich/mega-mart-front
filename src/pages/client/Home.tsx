import MainCategoriesSlider from '../../components/client/home/MainCategoriesSlider'
import OffersSlider from '../../components/client/home/OffersSlider'
import Products from '../../components/client/home/Products'
import Error from '../../components/client/ui/Error'
import { useFeed } from '../../features/client/home/feed'

const Home = () => {
  const { isError, refetch } = useFeed()

  if (isError)
    return <Error message="Failed to load records!" retry={refetch} />

  return (
    <>
      <OffersSlider />
      <MainCategoriesSlider />
      <Products />
    </>
  )
}

export default Home
