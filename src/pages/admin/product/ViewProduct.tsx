import Actions from '../../../components/admin/products/details/Actions'
import Infos from '../../../components/admin/products/details/Infos'
import Sales from '../../../components/admin/products/details/Sales'
import Reviews from '../../../components/admin/products/details/reviews'
import { ScrollRestoration, useParams } from 'react-router-dom'
import { useProduct } from '../../../features/admin/products/queries/useProduct'
import Loader from './Loader'
import Error from './Error'

const ViewProduct = () => {
  const { id } = useParams()
  const { data: product, isLoading, isError } = useProduct(id)

  if (isLoading) return <Loader />
  if (isError) return <Error />

  return (
    <div>
      <h2 className="mb-8 text-lg font-bold text-center text-dark-500">
        View Product
      </h2>

      <section className="p-6 bg-white">
        <Actions product={product} />
        <Infos product={product} />
        <Sales />
        <Reviews reviews={product.reviews} />
      </section>
      <ScrollRestoration />
    </div>
  )
}

export default ViewProduct
