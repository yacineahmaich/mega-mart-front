import { StarIcon } from '@heroicons/react/24/solid'
import { products } from '../../../lib/contants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

const productImages = [
  'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
  'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',

  'https://img2-cdn.halftime.pt/2023/04/19/c/8/c8aca091e979da7d_thumb.jpeg',
  'https://img2-cdn.halftime.pt/2023/04/19/2/e/2ed13921a82d614a_thumb.jpeg',
  'https://img5-cdn.halftime.pt/2023/04/17/d/7/d72b26cf3e4c6058_thumb.jpeg',
  'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
  'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',
]
const ViewProduct = () => {
  const product = products[0]

  return (
    <div>
      <h2 className="mb-8 text-lg font-bold text-center text-dark-500">
        {product.name}
      </h2>

      <section className="flex gap-8 p-6 bg-white">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          onSwiper={swiper => console.log(swiper)}
          grabCursor={true}
          className="m-0 overflow-hidden p-6 bg-light rounded-lg w-[300px] h-[300px]"
        >
          {productImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <img src={image} alt={image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <div className="flex h-fit justify-evenly">
            <div className="flex flex-col items-center gap-3 text-center border border-gray">
              <span className="px-12 py-1 text-lg font-semibold border-b border-gray text-dark-600">
                Price
              </span>
              <span className="p-3 font-bold text-primary-500">
                {product.price}
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center border border-gray">
              <span className="px-12 py-1 text-lg font-semibold border-b border-gray text-dark-600">
                Status
              </span>
              <span className="p-3 font-bold text-primary-500">InStock</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center border border-gray">
              <span className="px-12 py-1 text-lg font-semibold border-b border-gray text-dark-600">
                Quantity
              </span>
              <span className="p-3 font-bold text-primary-500">12</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center border border-gray">
              <span className="px-12 py-1 text-lg font-semibold border-b border-gray text-dark-600">
                Reviews
              </span>
              <span>
                <span className="flex text-yellow-400">
                  <StarIcon className="w-3 h-3" />
                  <StarIcon className="w-3 h-3" />
                  <StarIcon className="w-3 h-3" />
                  <StarIcon className="w-3 h-3" />
                </span>
                <span className="font-bold text-primary-500">12</span>
              </span>
            </div>
          </div>

          <div className="mt-3 space-x-4">
            <Link to="edit">
              <span className="text-info-400 hover:underline">edit</span>
            </Link>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded-sm bg-danger-500">
              delete
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ViewProduct
