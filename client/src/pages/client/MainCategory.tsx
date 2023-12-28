import { Link, useParams } from 'react-router-dom'
import Error from '../../components/ui/Error'
import OffersSlider from '../../components/home/OffersSlider'
import Navigation from '../../components/Navigation'
import { RectangleStackIcon } from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMainCategory } from '../../services/main-category/useMainCategory'
import ProductCard from '../../components/ui/ProductCard'
import { useMainCategoryFeed } from '../../services/main-category/useMainCategoryFeed'

const MainCategory = () => {
  const { slug } = useParams()
  const { isError, data } = useMainCategory(slug)

  if (isError) return <Error message="Failed to load data" />

  return (
    <div>
      <Navigation
        breadcrumb={[
          {
            label: data?.name,
            icon: RectangleStackIcon,
          },
        ]}
      />
      <OffersSlider />
      <div className="mx-3 -mt-10 md:mx-6">
        <ExploreCategories />
        <Feed />
      </div>
    </div>
  )
}

const ExploreCategories = () => {
  const { slug } = useParams()
  const { data } = useMainCategory(slug)

  if (!data) return

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      breakpoints={{
        1100: {
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 3,
        },
        100: {
          slidesPerView: 2,
        },
      }}
      slidesOffsetBefore={30}
      className="bg-white select-none "
      wrapperClass="py-6"
    >
      <div>
        {data.categories.map(category => (
          <SwiperSlide key={category.id}>
            <Link to={`/mc/${data.slug}/category/${category.slug}`}>
              <article title={category.name}>
                <div className="w-fit">
                  <img
                    src={category.image.url}
                    alt={category.image.name}
                    className="w-32 h-32 bg-cover rounded-full ring-offset-2 ring-gray ring-1 bg-light md:w-48 md:h-48 "
                  />
                  <h3 className="mt-3 text-xs font-bold text-center md:font-medium md:text-xs text-dark-600/80">
                    {category.name}
                  </h3>
                </div>
              </article>
            </Link>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}

const Feed = () => {
  const { slug } = useParams()
  const { data } = useMainCategoryFeed(slug)

  if (!data) return <div className="min-h-screen"></div>

  return (
    <main>
      {data?.map(({ category, products }) => (
        <div className="p-2 space-y-10 md:p-6" key={category.id}>
          <section>
            <h2 className="text-3xl font-bold text-dark-800">
              {category.name}
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-10 lg:gap-8 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </main>
  )
}

export default MainCategory
