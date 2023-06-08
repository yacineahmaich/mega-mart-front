import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

const categories = [
  {
    title: 'cat 1',
    image: 'https://www.marjanemall.ma/media/Logos/festdesmarque/ens-f.png',
  },
  {
    title: 'cat 2',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/smart.jpg',
  },
  {
    title: 'cat 3',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/info-game.jpg',
  },
  {
    title: 'cat 4',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/son-tv.jpg',
  },
  {
    title: 'cat 5',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/mode.jpg',
  },
  {
    title: 'cat 6',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/sport.jpg',
  },
  {
    title: 'cat 7',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/bebe.jpg',
  },
  {
    title: 'cat 8',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/smart.jpg',
  },
  {
    title: 'cat 9',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/info-game.jpg',
  },
  {
    title: 'cat 10',
    image: 'https://www.marjanemall.ma/media/Banners-home-page/son-tv.jpg',
  },
]

import 'swiper/css'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid'
import { useRef } from 'react'
import { useMcategories } from '../../../features/client/main-category/useMcategories'
import { Link } from 'react-router-dom'

const MainCategoriesSlider = () => {
  const prevRef = useRef()
  const nextRef = useRef()

  const { data: categories } = useMcategories()

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
      className="h-40 -mt-20 select-none"
      wrapperClass="relative"
    >
      <div>
        {categories.map(category => (
          <SwiperSlide
            key={category.id}
            className="relative overflow-hidden bg-white rounded-lg shadow"
          >
            <Link to={`/mc/${category.slug}`}>
              <div className="absolute top-0 left-0 w-full p-2 bg-light/80">
                <h4>{category.name}</h4>
              </div>
              <img
                src={category.image.url}
                alt={category.image.name}
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
