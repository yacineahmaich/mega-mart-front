import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
  category: MainCategory
}

const SubCategories: FC<Props> = ({ category }) => {
  return (
    <Swiper
      slidesPerView={4}
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
      {category.categories.map(category => (
        <SwiperSlide key={category.id}>
          <Link
            to={`/mc/${category.parentCategory.slug}/category/${category.slug}`}
          >
            <article
              className="relative h-48 overflow-hidden rounded-lg md:h-64"
              title={category.name}
            >
              <div className="absolute inset-0 flex items-center justify-center w-full h-full text-lg font-medium text-white shadow-inner pointer-events-none bg-black/20">
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

export default SubCategories
