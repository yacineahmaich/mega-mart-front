import StarRating from 'react-star-ratings'

const ReviewsSkeleton = () => {
  return (
    <article className="space-y-2 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="rounded-full w-11 h-11 bg-gray"></div>
        <h3 className="w-40 h-3 font-normal rounded-full bg-light"></h3>
      </div>
      <div className="flex items-center space-x-3">
        <StarRating
          rating={0}
          starDimension="15"
          starSpacing="1"
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
  )
}

export default ReviewsSkeleton
