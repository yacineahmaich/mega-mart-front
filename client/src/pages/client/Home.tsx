import Navigation from '../../components/client/Navigation'
import MainCategoriesSlider from '../../components/client/home/MainCategoriesSlider'
import OffersSlider from '../../components/client/home/OffersSlider'
import Feed from '../../components/client/home/Feed'

const Home = () => {
  return (
    <>
      <Navigation />
      <OffersSlider />
      <MainCategoriesSlider />
      <Feed />
    </>
  )
}

export default Home
