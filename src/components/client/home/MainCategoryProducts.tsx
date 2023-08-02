import { FC } from 'react'
import ProductCard from '../ui/ProductCard'
import { Link } from 'react-router-dom'

type Props = {
  feedItem: {
    mainCategory: MainCategory
    products: Product[]
  }
}

const MainCategoryProducts: FC<Props> = ({ feedItem }) => {
  const { mainCategory: category, products } = feedItem

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-dark-800">{category.name}</h2>

        <Link to={`/mc/${category.slug}`}>
          <span className="text-sm font-medium underline text-dark-600 hover:no-underline">
            See more
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-10 md:gap-8 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-10">
        <Link
          to={`/mc/${category.slug}`}
          className="px-10 py-2 border rounded-full md:px-20 group border-primary-500 text-primary-500"
        >
          <span>See more</span>
        </Link>
      </div>
    </section>
  )
}

export default MainCategoryProducts
