import Navigation from '../../components/Navigation'
import MainCategoriesSlider from '../../components/home/MainCategoriesSlider'
import OffersSlider from '../../components/home/OffersSlider'
import Feed from '../../components/home/Feed'

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
