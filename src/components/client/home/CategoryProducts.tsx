import { FC } from 'react'
import ProductCardSkeleton from '../homeCategory/ProductCardSekeleton'
import { useMcategoryProducts } from '../../../features/client/home/useMcategoryProducts'
import ProductCard from '../homeCategory/ProductCard'
import { Link } from 'react-router-dom'

type Props = {
  category: MainCategory
}

const CategoryProducts: FC<Props> = ({ category }) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMcategoryProducts(category.id)

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-dark-800">{category.name}</h2>

        <Link to="#">
          <span className="text-sm font-medium underline text-dark-700 hover:no-underline">
            See more
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {isLoading ? (
          <>
            {Array.from({ length: 12 }, (_, i) => i).map(i => (
              <ProductCardSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {data.pages.map(page =>
              page.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </>
        )}
      </div>
      {hasNextPage && (
        <div className="flex justify-center w-full mt-10">
          <button
            className="px-10 py-2 border rounded-full md:px-20 group border-primary-500 text-primary-500"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            <span className="mr-2 group-hover:underline">
              {isFetchingNextPage ? '...' : 'Load more'}
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

export default CategoryProducts
