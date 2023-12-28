import { Link } from 'react-router-dom'
import { useHomeFeed } from '../../services/useHomeFeed'
import ProductCard from '../ui/ProductCard'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Spinner from '../ui/Spinner'

const Feed = () => {
  const { data } = useHomeFeed()

  if (!data) return <Spinner />

  return (
    <main>
      {data.map(item => (
        <div className="p-2 space-y-10 md:p-6" key={item.mainCategory.id}>
          <MainCategoryProducts feedItem={item} />
          <SubCategories categories={item.mainCategory.categories} />
        </div>
      ))}
    </main>
  )
}

const MainCategoryProducts: FC<{
  feedItem: {
    mainCategory: MainCategory
    products: Product[]
  }
}> = ({ feedItem }) => {
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

const SubCategories: FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 2,
        },
      }}
      className="select-none"
    >
      {categories.map(category => (
        <SwiperSlide key={category.id}>
          <Link
            to={`/mc/${category.parentCategory.slug}/category/${category.slug}`}
          >
            <article
              className="relative h-32 overflow-hidden rounded-lg md:h-48"
              title={category.name}
            >
              <div className="absolute inset-0 flex items-center justify-center w-full h-full text-lg font-medium text-center text-white shadow-inner pointer-events-none bg-black/20">
                {category.name}
              </div>
              <img
                src={category.image.url}
                alt={category.image.name}
                className="object-cover w-full h-full"
              />
            </article>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Feed
