import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Controller, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import clsx from 'clsx'
import { useProduct } from '../../../features/client/products/product'
import { useParams } from 'react-router-dom'

const Preview = () => {
  const [sideSwiper, setSideSwiper] = useState(null)
  const [productSwiper, setProductSwiper] = useState(null)
  const { slug } = useParams()
  const { data: product } = useProduct(slug)

  return (
    <div className="flex md:gap-2 lg:gap-4">
      <div className="hidden md:block">
        <Swiper
          spaceBetween={20}
          modules={[Controller]}
          slidesPerView={4}
          onSwiper={setSideSwiper as () => void}
          controller={{ control: productSwiper }}
          direction="vertical"
          slideToClickedSlide
          centeredSlides={true}
          grabCursor={true}
          className="overflow-hidden h-[300px] lg:h-swiper"
        >
          {product.images.map(img => (
            <SwiperSlide key={img.id} className="p-1 select-none">
              {({ isActive }) => (
                <div
                  className={clsx(
                    'overflow-hidden rounded-lg cursor-pointer ring-2 border border-gray bg-light w-20 h-20 ',
                    {
                      'ring-offset-2 ring-primary-500': isActive,
                      'ring-gray': !isActive,
                    }
                  )}
                >
                  <img
                    src={img.url}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        modules={[Controller, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={setProductSwiper as () => void}
        controller={{ control: sideSwiper }}
        className="w-[90vw] lg:w-auto  h-[350px] md:h-[300px] lg:h-swiper"
        grabCursor={true}
        pagination={{
          clickable: false,
        }}
      >
        {product.images.map(img => (
          <SwiperSlide key={img.id}>
            <div className="flex items-center justify-center w-full h-full md:p-6">
              <div>
                <img
                  src={img.url}
                  alt="zdzd"
                  className="object-cover max-w-full max-h-full select-none"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Preview
