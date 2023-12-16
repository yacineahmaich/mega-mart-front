import Checkout from '../../components/client/product/Checkout'
import GeneralInfos from '../../components/client/product/GeneralInfos'
import Infos from '../../components/client/product/Infos'
import Preview from '../../components/client/product/Preview'
import CheckoutTip from '../../components/client/product/CheckoutTip'
import { useProduct } from '../../features/client/products/product'
import { useParams } from 'react-router-dom'
import Error from '../../components/client/ui/Error'
import Navigation from '../../components/client/Navigation'
import { InboxIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'

const ProductDetails = () => {
  const { slug } = useParams()
  const { isError, data } = useProduct(slug)

  if (isError) return <Error message="Failed to get prouct data" />

  return (
    <>
      <Navigation
        breadcrumb={[
          {
            label: 'Products',
            icon: RectangleGroupIcon,
          },
          {
            label: data?.name,
            icon: InboxIcon,
          },
        ]}
      />
      <div className="min-h-screen p-3 space-y-12 sm:p-6">
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
      </div>
    </>
  )
}

export default ProductDetails
