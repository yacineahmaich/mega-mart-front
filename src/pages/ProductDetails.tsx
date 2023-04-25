import Checkout from '../components/product/Checkout'
import GeneralInfos from '../components/product/GeneralInfos'
import Infos from '../components/product/Infos'
import Preview from '../components/product/Preview'

const ProductDetails = () => {
  return (
    <div className="px-3 space-y-12 sm:px-6">
      <section>
        <div className="relative grid grid-cols-[40%_60%] gap-6">
          <Preview />
          <Infos />
          <Checkout />
        </div>
      </section>
      <section>
        <GeneralInfos />
      </section>
    </div>
  )
}

export default ProductDetails
