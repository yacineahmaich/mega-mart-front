import StarRating from 'react-star-ratings'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../features/client/products/product'
import { useProductReviews } from '../../../features/client/products/useProductReviews'
import ReviewsSkeleton from './ReviewsSkeleton'
import Button from '../ui/Button'
import CreateReview from './CreateReview'
import Message from '../ui/Message'
import Error from '../ui/Error'

const Reviews = () => {
  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  const {
    data,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductReviews(product.id)

  return (
    <div>
      <h4 className="mb-4 font-medium ">Product reviews</h4>

      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="space-y-2">
          <span className="block text-6xl font-bold sm:text-center text-dark-700">
            {product.avgRating}
          </span>
          <StarRating
            rating={+product.avgRating}
            starDimension="20"
            starSpacing="1"
            starEmptyColor="#e5e5e5"
            starRatedColor="#fde047"
          />
          <p className="text-sm font-medium text-dark-600">
            {product.totalReviews} reviews
          </p>
        </div>
        <div className="flex-1">
          <CreateReview />

          <div className="space-y-8">
            {isLoading ? (
              Array.from({ length: 10 }, (_, idx) => (
                <ReviewsSkeleton key={idx} />
              ))
            ) : isError ? (
              <Error message="Failed to load reviews!" retry={refetch} />
            ) : data.pages.length > 0 ? (
              <>
                {data.pages.map(page =>
                  page.reviews.map(review => (
                    <article key={review.id} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="overflow-hidden rounded-full w-11 h-11 bg-gray">
                          {review.author.avatar ? (
                            <img
                              src={review.author.avatar.url}
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
                          starDimension="15"
                          starSpacing="1"
                          starEmptyColor="#e5e5e5"
                          starRatedColor="#fde047"
                        />
                        <span className="text-xs text-dark-600">
                          {review.at}
                        </span>
                      </div>
                      <p className="text-sm text-dark-500">{review.comment}</p>
                    </article>
                  ))
                )}
                {hasNextPage && !isLoading && (
                  <div className="mt-10 text-center">
                    <Button
                      variant="small"
                      className="w-1/2 rounded-full"
                      onClick={() => fetchNextPage()}
                      isLoading={isFetchingNextPage}
                    >
                      Load more
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <Message message="No reviews found!" />
            )}
          </div>
        </div>
        <div className="hidden w-1/3 lg:block"></div>
      </div>
    </div>
  )
}

export default Reviews
