import { useState } from 'react'
import { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const productImages = [
  'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
  'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',

  'https://img2-cdn.halftime.pt/2023/04/19/c/8/c8aca091e979da7d_thumb.jpeg',
  'https://img2-cdn.halftime.pt/2023/04/19/2/e/2ed13921a82d614a_thumb.jpeg',
  'https://img5-cdn.halftime.pt/2023/04/17/d/7/d72b26cf3e4c6058_thumb.jpeg',
  'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
  'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',
]

const ProductPreview = () => {
  const [sideSwiper, setSideSwiper] = useState(null)
  const [productSwiper, setProductSwiper] = useState(null)

  return (
    <section className="flex">
      <div className="flex gap-6 mb-40 ">
        <Swiper
          // spaceBetween={10}
          modules={[Controller]}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setSideSwiper as () => void}
          controller={{ control: productSwiper }}
          direction="vertical"
          slideToClickedSlide
          centeredSlides={true}
          grabCursor={true}
          className="h-[414px] min-h-[300px] overflow-hidden"
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
          {/* <SwiperSlide className="bg-gray">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>

        <Swiper
          // slidesPerView={1}
          modules={[Controller]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setProductSwiper as () => void}
          controller={{ control: sideSwiper }}
          wrapperClass="flex items-center h-full"
          className="overflow-hidden border rounded-lg select-none w-swiper h-swiper border-gray bg-light"
        >
          {productImages.map((image, idx) => (
            <SwiperSlide zoom key={idx}>
              <div className=" w-swiper min-w-[300px] min-h-[300px] flex justify-center items-center h-swiper rounded-lg">
                <img
                  src={image}
                  alt="sasa"
                  className="object-cover max-h-full max-x-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex-1 bg-green-400">&nbsp;</div> */}
    </section>
  )
}

export default ProductPreview
