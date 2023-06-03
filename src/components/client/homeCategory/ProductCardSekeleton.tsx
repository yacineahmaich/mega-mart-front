const ProductCardSkeleton = () => {
  return (
    <article className="flex flex-col overflow-hidden bg-white border shadow-sm rounded-xl border-gray">
      <div className="bg-light h-52 animate-pulse"></div>

      <div className="flex flex-col justify-between flex-1 p-3 space-y-4">
        <div className="space-y-2">
          <span className="block w-full rounded-full h-2.5 bg-light"></span>
          <span className="block w-1/2 rounded-full h-2.5 bg-light"></span>
        </div>

        <div className="flex items-center justify-between gap-6 mt-auto">
          <span className="w-1/2 h-3 rounded-full bg-light"></span>
          <span className="w-8 h-8 rounded-lg bg-light"></span>
        </div>
      </div>
    </article>
  )
}

export default ProductCardSkeleton
