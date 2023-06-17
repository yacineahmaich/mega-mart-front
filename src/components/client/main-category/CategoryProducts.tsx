import { FC } from 'react'
import ProductCardSkeleton from '../ui/ProductCardSekeleton'
import ProductCard from '../ui/ProductCard'
import { useCategoryProducts } from '../../../features/client/products/useCategoryProducts'

type Props = {
  category: Category
}

const CategoryProducts: FC<Props> = ({ category }) => {
  const { data, isLoading } = useCategoryProducts(category.slug, {
    'one-page': true,
  })

  return (
    <section>
      <h2 className="text-3xl font-bold text-dark-800">{category.name}</h2>

      <div className="grid grid-cols-2 gap-2 mt-10 md:gap-8 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {isLoading ? (
          <>
            {Array.from({ length: 12 }, (_, i) => i).map(i => (
              <ProductCardSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {data.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default CategoryProducts
