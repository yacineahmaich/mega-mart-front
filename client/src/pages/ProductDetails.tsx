import Checkout from '../components/product/Checkout'
import GeneralInfos from '../components/product/GeneralInfos'
import Infos from '../components/product/Infos'
import Preview from '../components/product/Preview'
import CheckoutTip from '../components/product/CheckoutTip'
import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { InboxIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import { useProduct } from '../services/product/useProduct'

const ProductDetails = () => {
  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  if (!product) return <div className="min-h-screen"></div>

  return (
    <>
      <Navigation
        breadcrumb={[
          {
            label: 'Products',
            icon: RectangleGroupIcon,
          },
          {
            label: product?.name,
            icon: InboxIcon,
          },
        ]}
      />
      <div className="min-h-screen p-3 space-y-12 sm:p-6">
        <section>
          <div className="relative grid md:grid-cols-[40%_60%] md:gap-2 lg:gap-4">
            <Preview product={product} />
            <Infos product={product} />
            <Checkout product={product} />
            <CheckoutTip product={product} />
          </div>
        </section>
        <section>
          <GeneralInfos />
        </section>
      </div>
    </>
  )
}

export default ProductDetails
