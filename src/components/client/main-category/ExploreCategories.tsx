import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMainCategoryFeed } from '../../../features/client/main-category/feed'

const ExploreCategories = () => {
  const { slug } = useParams()

  const {
    data: { mainCategory },
  } = useMainCategoryFeed(slug)

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
        {mainCategory.categories.map(category => (
          <SwiperSlide key={category.id}>
            <Link to={`/mc/${mainCategory.slug}/category/${category.slug}`}>
              <article title={category.name}>
                <div className="w-fit">
                  <img
                    src={category.image.url}
                    alt={category.image.name}
                    className="w-32 h-32 bg-cover rounded-full bg-light md:w-48 md:h-48 "
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

export default ExploreCategories
