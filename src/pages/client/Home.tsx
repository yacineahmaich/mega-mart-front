import MainCategoriesSlider from '../../components/client/home/MainCategoriesSlider'
import OffersSlider from '../../components/client/home/OffersSlider'
import Products from '../../components/client/home/Products'

const Home = () => {
  return (
    <div>
      <OffersSlider />
      <MainCategoriesSlider />
      <Products />
    </div>
  )
}

export default Home
