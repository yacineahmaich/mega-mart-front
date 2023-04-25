import { useState } from 'react'
import { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const productImages = [
  'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
  'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',

  'https://img2-cdn.halftime.pt/2023/04/19/c/8/c8aca091e979da7d_thumb.jpeg',
  'https://img2-cdn.halftime.pt/2023/04/19/2/e/2ed13921a82d614a_thumb.jpeg',
  'https://img5-cdn.halftime.pt/2023/04/17/d/7/d72b26cf3e4c6058_thumb.jpeg',
  'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
  'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',
]

const Preview = () => {
  const [sideSwiper, setSideSwiper] = useState(null)
  const [productSwiper, setProductSwiper] = useState(null)

  return (
    <div className="flex gap-4">
      <div>
        <Swiper
          // spaceBetween={10}
          modules={[Controller]}
          slidesPerView={4}
          onSwiper={setSideSwiper as () => void}
          controller={{ control: productSwiper }}
          direction="vertical"
          slideToClickedSlide
          centeredSlides={true}
          grabCursor={true}
          className="overflow-hidden h-swiper"
        >
          {productImages.map((image, idx) => (
            <SwiperSlide key={idx} className="p-1 select-none">
              {({ isActive }) => (
                <div
                  className={`w-20 h-20  overflow-hidden rounded-lg cursor-pointer  border border-gray bg-light ${
                    isActive ? 'ring-4 ring-primary-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt="sasa"
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        modules={[Controller]}
        slidesPerView={1}
        onSwiper={setProductSwiper as () => void}
        controller={{ control: sideSwiper }}
        className=""
      >
        {productImages.map(image => (
          <SwiperSlide>
            <div className="flex items-center justify-center w-full h-full">
              <div>
                <img
                  src={image}
                  alt="zdzd"
                  className="object-cover max-w-full max-h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="bg-green-300 border">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-green-300 border">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-green-300 border">Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Preview
