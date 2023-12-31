import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
  categories: Category[]
}

const SubCategories: FC<Props> = ({ categories }) => {
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

export default SubCategories
