import { Link, useParams } from 'react-router-dom'
import { useMCategory } from '../../../features/client/main-category/m-category'
import { Swiper, SwiperSlide } from 'swiper/react'

const ExploreCategories = () => {
  const { slug } = useParams()
  const { data: mainCategory } = useMCategory(slug)

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      breakpoints={{
        1024: {
          slidesPerView: 5,
        },
        767: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 2,
        },
      }}
      className="bg-white select-none"
      wrapperClass="p-3 md:p-6"
    >
      {mainCategory.categories.map(category => (
        <SwiperSlide key={category.id} className="group">
          <Link to={`/mc/${mainCategory.slug}/category/${category.slug}`}>
            <article
              className="relative mx-auto overflow-hidden rounded-full w-44 h-44 md:w-48 md:h-48 bg-light"
              title={category.name}
            >
              <img
                src={category.image.url}
                alt={category.image.name}
                className="object-cover w-full h-full transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105"
              />
            </article>
            <h3 className="mt-3 text-sm font-medium text-center text-dark-600">
              {category.name}
            </h3>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ExploreCategories
