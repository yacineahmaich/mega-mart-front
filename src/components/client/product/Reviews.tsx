import StarRating from 'react-star-ratings'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../features/client/products/queries/useProduct'

const Reviews = () => {
  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  const avgRating = Math.trunc(
    product.reviews.reduce((acc, review) => review.rating + acc, 0) ??
      0 / product.reviews.length
  )

  return (
    <div>
      <h4 className="mb-10 font-medium">Product reviews</h4>

      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="space-y-2">
          <span className="block text-6xl font-bold sm:text-center text-dark-700">
            {avgRating}
          </span>
          <StarRating
            rating={avgRating}
            starDimension={20}
            starSpacing={1}
            starEmptyColor="#e5e5e5"
            starRatedColor="#fde047"
          />
          <p className="text-sm font-medium text-dark-600">
            {product.reviews.length} reviews
          </p>
        </div>
        <div className="flex-1">
          <div className="space-y-8">
            {product.reviews.map(review => (
              <article className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full w-11 h-11 bg-gray">
                    {review.author.profileImg ? (
                      <img
                        src={review.author.profileImg}
                        alt={review.author.name}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-white bg-primary-600">
                        <span className="font-bold uppercase">
                          {review.author.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-normal text-dark-800">
                    {review.author.name}
                  </h3>
                </div>
                <div className="space-x-3">
                  <StarRating
                    rating={review.rating}
                    starDimension={15}
                    starSpacing={1}
                    starEmptyColor="#e5e5e5"
                    starRatedColor="#fde047"
                  />
                  <span className="text-xs text-dark-600">{review.at}</span>
                </div>
                <p className="text-sm text-dark-500">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="hidden w-1/3 lg:block"></div>
      </div>
    </div>
  )
}

export default Reviews
