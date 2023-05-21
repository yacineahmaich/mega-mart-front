import { FC } from 'react'
import {
  BanknotesIcon,
  CubeIcon,
  HashtagIcon,
  RocketLaunchIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
  product: Product
}

const Infos: FC<Props> = ({ product }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        className="mb-10 bg-light h-60"
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

      <div className="flex justify-between gap-10 text-dark-600 bg-light">
        <div className="flex flex-col items-center w-full gap-3 p-4 font-semibold ">
          <div className="flex items-center gap-2">
            <HashtagIcon className="inline w-4 h-4" />
            <span>UUID</span>
          </div>
          <span>{product.id}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-3 p-4 font-semibold">
          <div className="flex items-center gap-2">
            <CubeIcon className="inline w-4 h-4" />
            <span>Quantity</span>
          </div>
          <span>{product.quantity}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-3 p-4 font-semibold">
          <div className="flex items-center gap-2">
            <BanknotesIcon className="inline w-4 h-4" />
            <span>Price</span>
          </div>
          <span>{product.price}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-3 p-4 font-semibold">
          <div className="flex items-center gap-2">
            <RocketLaunchIcon className="inline w-4 h-4" />
            <span>Reviews</span>
          </div>
          <span>{product.reviews.length}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-3 p-4 font-semibold">
          <div className="flex items-center gap-2">
            <StarIcon className="inline w-4 h-4" />
            <span>Rating</span>
          </div>
          <span>{product.avgRating}</span>
        </div>
      </div>
    </>
  )
}

export default Infos
