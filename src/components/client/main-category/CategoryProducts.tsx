import { FC } from 'react'
import ProductCard from '../ui/ProductCard'

type Props = {
  feedItem: {
    category: Category
    products: Product[]
  }
}

const CategoryProducts: FC<Props> = ({ feedItem }) => {
  const { category, products } = feedItem

  return (
    <section>
      <h2 className="text-3xl font-bold text-dark-800">{category.name}</h2>

      <div className="grid grid-cols-2 gap-6 mt-10 lg:gap-8 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default CategoryProducts
