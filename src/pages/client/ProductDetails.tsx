import spinner from '../../assets/icons/spinner.png'
import Checkout from '../../components/client/product/Checkout'
import GeneralInfos from '../../components/client/product/GeneralInfos'
import Infos from '../../components/client/product/Infos'
import Preview from '../../components/client/product/Preview'
import CheckoutTip from '../../components/client/product/CheckoutTip'
import { useProduct } from '../../features/client/products/product'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { slug } = useParams()
  const { isLoading } = useProduct(slug)

  return (
    <div className="min-h-screen p-3 space-y-12 sm:p-6">
      {isLoading ? (
        <div>
          <img
            src={spinner}
            alt="spinner"
            className="w-8 h-8 mx-auto duration-1000 mt-28 animate-spin"
          />
        </div>
      ) : (
        <>
          <section>
            <div className="relative grid md:grid-cols-[40%_60%] md:gap-2 lg:gap-4">
              <Preview />
              <Infos />
              <Checkout />
              <CheckoutTip />
            </div>
          </section>
          <section>
            <GeneralInfos />
          </section>
        </>
      )}
    </div>
  )
}

export default ProductDetails
