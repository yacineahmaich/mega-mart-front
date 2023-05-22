import { useProduct } from '../../../features/client/products/queries/useProduct'
import { useParams } from 'react-router-dom'
import StarRating from 'react-star-ratings'

const Infos = () => {
  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  return (
    <div className="flex-1 p-3">
      <h2 className="hidden max-w-md mb-3 text-2xl font-bold leading-8 md:block lg:text-3xl text-dark-600">
        {product.name}
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex">
          <StarRating
            rating={product.avgRating}
            starDimension="20"
            starSpacing="1"
            starEmptyColor="#e5e5e5"
            starRatedColor="#fde047"
          />
        </div>
        <div>
          <p className="text-sm font-medium">
            <span className="font-bold">{product.totalReviews}</span> Reviews
          </p>
        </div>
      </div>

      <div>
        <h4 className="mb-2 font-semibold text-md text-primary-600">
          About Product
        </h4>

        <p className="max-w-lg text-dark-600">{product.description}</p>
      </div>
    </div>
  )
}

export default Infos
