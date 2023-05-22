import StarRating from 'react-star-ratings'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../features/client/products/queries/useProduct'
import { useProductReviews } from '../../../features/client/products/queries/useProductReviews'
import { ArrowPathIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Reviews = () => {
  const [limit, setLimit] = useState(10)
  const { slug } = useParams()
  const { data: product } = useProduct(slug)
  const { data, isLoading } = useProductReviews(product.id, limit)
  console.log(limit)
  return (
    <div>
      <h4 className="mb-10 font-medium">Product reviews</h4>

      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="space-y-2">
          <span className="block text-6xl font-bold sm:text-center text-dark-700">
            {product.avgRating}
          </span>
          <StarRating
            rating={product.avgRating}
            starDimension={20}
            starSpacing={1}
            starEmptyColor="#e5e5e5"
            starRatedColor="#fde047"
          />
          <p className="text-sm font-medium text-dark-600">
            {product.avgRating} reviews
          </p>
        </div>
        <div className="flex-1">
          <div className="space-y-8">
            {isLoading
              ? Array.from({ length: 10 }, (_, idx) => (
                  <article key={idx} className="space-y-2 animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full w-11 h-11 bg-gray"></div>
                      <h3 className="w-40 h-3 font-normal rounded-full bg-light"></h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <StarRating
                        rating={0}
                        starDimension={15}
                        starSpacing={1}
                        starEmptyColor="#e5e5e5"
                      />
                      <span className="h-3 rounded-full w-14 bg-light"></span>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-dark-500">
                      <span className="w-full h-3 rounded-full bg-light"></span>
                      <span className="w-full h-3 rounded-full bg-light"></span>
                      <span className="w-1/2 h-3 rounded-full bg-light"></span>
                    </div>
                  </article>
                ))
              : data.reviews.map(review => (
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
          <button
            className="mt-4 group text-md text-primary-500 hover:underline"
            onClick={() => setLimit(limit => limit + 10)}
          >
            <span>load more</span>
            {isLoading ? (
              <ArrowPathIcon className="inline w-5 h-5 translate-x-1" />
            ) : (
              <PlayCircleIcon className="inline w-5 h-5 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </div>
        <div className="hidden w-1/3 lg:block"></div>
      </div>
    </div>
  )
}

export default Reviews
