import { Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { useOffers } from '../../../features/client/offer/offer'

const OffersSlider = () => {
  const prevRef = useRef()
  const nextRef = useRef()

  const { data: offers } = useOffers()

  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Autoplay]}
      loop
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      onInit={swiper => {
        // eslint-disable-next-line
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current
        // eslint-disable-next-line
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      className="relative h-72 md:h-[450px] group bg-light"
    >
      <div>
        {offers?.map(offer => (
          <SwiperSlide key={offer.id}>
            <Link to={`/products/${offer.product.slug}`}>
              <img
                src={offer.backdrop.url}
                alt={offer.backdrop.name}
                className="object-cover w-full h-full bg-center"
              />
            </Link>
          </SwiperSlide>
        ))}
      </div>

      <div className="absolute inset-0 z-10 items-center justify-between hidden w-full h-full p-3 pointer-events-none group-hover:flex">
        <button
          ref={prevRef}
          className="p-2 rounded-full shadow pointer-events-auto bg-black/20"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white -translate-x-px drop-shadow-lg" />
        </button>
        <button
          ref={nextRef}
          className="p-2 rounded-full shadow pointer-events-auto bg-black/20"
        >
          <ChevronRightIcon className="w-6 h-6 text-white translate-x-px drop-shadow-lg" />
        </button>
      </div>
    </Swiper>
  )
}

export default OffersSlider
