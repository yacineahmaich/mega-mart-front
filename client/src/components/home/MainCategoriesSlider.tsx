import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useMainCategories } from '../../services/main-category/useMainCategories'

const MainCategoriesSlider = () => {
  const prevRef = useRef()
  const nextRef = useRef()

  const { data } = useMainCategories()

  if (!data) return

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={5}
      spaceBetween={20}
      slidesOffsetBefore={80}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      onInit={swiper => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      breakpoints={{
        1100: {
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 4,
          slidesOffsetBefore: 80,
        },
        600: {
          slidesPerView: 3,
          slidesOffsetBefore: 60,
        },
        100: {
          slidesPerView: 2,
          slidesOffsetBefore: 40,
        },
      }}
      className="h-32 mt-10 select-none md:h-40"
      wrapperClass="relative"
    >
      <div>
        {data?.map(mc => (
          <SwiperSlide
            key={mc.id}
            className="relative overflow-hidden border rounded-lg bg-white/20 border-gray"
          >
            <Link to={`/mc/${mc.slug}`}>
              <div className="absolute top-0 left-0 w-full p-2 bg-light/70">
                <h4>{mc.name}</h4>
              </div>
              <img
                src={mc.image.url}
                alt={mc.image.name}
                className="object-cover w-full h-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </div>

      {
        // navigation buttons
      }
      <div className="absolute inset-0 z-20 items-center justify-between hidden w-full h-full p-3 pointer-events-none md:flex">
        <button
          ref={prevRef}
          className="p-2 bg-white rounded-full shadow pointer-events-auto"
        >
          <ArrowLongLeftIcon className="w-4 h-4 text-dark-500" />
        </button>
        <button
          ref={nextRef}
          className="p-2 bg-white rounded-full shadow pointer-events-auto"
        >
          <ArrowLongRightIcon className="w-4 h-4 text-dark-500" />
        </button>
      </div>
    </Swiper>
  )
}

export default MainCategoriesSlider
