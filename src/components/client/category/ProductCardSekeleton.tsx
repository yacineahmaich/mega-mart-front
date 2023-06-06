const ProductCardSkeleton = () => {
  return (
    <article className="flex flex-col overflow-hidden bg-white shadow-sm rounded-xl animate-pulse">
      <div className="bg-gray h-52"></div>

      <div className="flex flex-col justify-between flex-1 p-3 space-y-10">
        <div className="space-y-2">
          <span className="block w-full rounded-full h-2.5 bg-gray"></span>
          <span className="block w-1/2 rounded-full h-2.5 bg-gray"></span>
        </div>

        <div className="flex items-center justify-between gap-6 mt-auto">
          <span className="w-1/2 h-3 rounded-full bg-gray"></span>
          <span className="w-8 h-8 rounded-lg bg-gray"></span>
        </div>
      </div>
    </article>
  )
}

export default ProductCardSkeleton
