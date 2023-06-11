import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useOffers } from '../../../features/client/home/useOffers'

const OffersSlider = () => {
  const prevRef = useRef()
  const nextRef = useRef()

  const { data: offers } = useOffers()

  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation]}
      loop
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
      className="relative h-96 md:h-[400px] group bg-light"
    >
      {
        // shadow
      }
      <div className="absolute bottom-0 left-0 z-20 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      {
        // slides
      }
      <div>
        {offers.map(offer => (
          <SwiperSlide key={offer.id}>
            <img
              src={offer.backdrop.url}
              alt={offer.backdrop.name}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </div>

      {
        // navigation buttons
      }
      <div className="absolute inset-0 z-10 items-center justify-between hidden w-full h-full p-3 pointer-events-none group-hover:flex">
        <button ref={prevRef} className="p-2 rounded-full pointer-events-auto">
          <ChevronLeftIcon className="w-8 h-8 text-light drop-shadow-lg" />
        </button>
        <button ref={nextRef} className="p-2 rounded-full pointer-events-auto">
          <ChevronRightIcon className="w-8 h-8 text-light drop-shadow-lg" />
        </button>
      </div>
    </Swiper>
  )
}

export default OffersSlider
