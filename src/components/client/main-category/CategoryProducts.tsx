import { FC } from 'react'
import ProductCardSkeleton from '../ui/ProductCardSekeleton'
import ProductCard from '../ui/ProductCard'
import Error from '../ui/Error'
import { useCategoryHotProducts } from '../../../features/client/products/useCategoryHotProducts'

type Props = {
  category: Category
}

const CategoryProducts: FC<Props> = ({ category }) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useCategoryHotProducts(category.slug)

  return (
    <section>
      <h2 className="text-3xl font-bold text-dark-800">{category.name}</h2>

      <div className="grid grid-cols-2 gap-4 mt-10 lg:gap-8 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {isLoading || isError ? (
          <>
            {Array.from({ length: 12 }, (_, i) => i).map(i => (
              <ProductCardSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default CategoryProducts
