import { FC } from 'react'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Retro 98/99 AC Milan Home Jersey zeffffffffff zsazdazd azdazd azdazdzad azdazd azd',
    image: 'https://img2-cdn.halftime.pt/2023/04/08/a/d/ad2cc81e9610b037.jpeg',
    price: '99.89',
  },
  {
    id: 2,
    name: 'Retro 98/99 AC Milan Home Jersey',
    image:
      'https://img7-cdn.halftime.pt/p/2023/04/21/c/6/c6d03f3c86dc3c5d82e52548_thumb.jpg',
    price: '112.20',
  },
  {
    id: 3,
    name: 'Retro 88/89 AC Miilan Away White Champion League',
    image:
      'https://img8-cdn.halftime.pt/p/2023/04/21/4/d/4d7cb43a709b3ace5ea62b15_thumb.jpg',
    price: '38.00',
  },
  {
    id: 4,
    name: 'Retro 01-02 Juventus Away Black Soccer Jersey',
    image:
      'https://img2-cdn.halftime.pt/2023/04/19/c/8/c8aca091e979da7d_thumb.jpeg',
    price: '62.34',
  },
  {
    id: 5,
    name: 'RRetro 10-11 Real Madrid Away Black Soccer Jersey',
    image:
      'https://img2-cdn.halftime.pt/2023/04/19/2/e/2ed13921a82d614a_thumb.jpeg',
    price: '230.64',
  },
  {
    id: 6,
    name: 'Retro 01/02 Roma Home Jersey',
    image:
      'https://img5-cdn.halftime.pt/2023/04/17/d/7/d72b26cf3e4c6058_thumb.jpeg',
    price: '40.65',
    hasDiscount: true,
  },
  {
    id: 7,
    name: 'Retro 07-08 Manchester United Gray Goalkeeper',
    image:
      'https://img8-cdn.halftime.pt/2023/04/11/4/9/491c65dce5f33a55_thumb.jpeg',
    price: '68.96',
  },
  {
    id: 8,
    name: 'Retro 95-96 Fiorentina Third Red Jersey',
    image:
      'https://img9-cdn.halftime.pt/2023/04/11/a/b/ab2dce120c92086b_thumb.jpeg',
    price: '39.67',
  },
  {
    id: 9,
    name: 'Retro 05-06 Arsenal Home Long Sleeve Jersey',
    image:
      'https://img8-cdn.halftime.pt/2023/04/11/9/2/92ca313d2cc6998f_thumb.jpeg',
    price: '89.23',
  },
  {
    id: 10,
    name: 'Retro 04-06 Newcastle United Home Jersey',
    image:
      'https://img1-cdn.halftime.pt/2023/04/08/6/4/641db9e819e3b352_thumb.jpeg',
    price: '42.67',
    hasDiscount: true,
  },
]

const ListProducts: FC = () => {
  return (
    <section className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <article className="overflow-hidden border bg-light rounded-xl border-gray">
          <div className="relative group">
            <a href="#">
              <img src={product.image} alt={product.name} />
            </a>
            <button className="absolute right-0 p-1 pr-3 transition-transform duration-200 translate-x-full rounded-l-lg outline-none text-light group-hover:translate-x-0 top-2 bg-primary-600">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="p-3 space-y-6">
            <h3 className="font-medium line-clamp-2 text-dark-700">
              <a href="#">{product.name}</a>
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div>
                  <span className="font-bold text-md">${product.price}</span>
                  {product.hasDiscount && (
                    <span className="block text-sm font-medium text-dark-500">
                      <s>${product.price}</s>
                    </span>
                  )}
                </div>
                {product.hasDiscount && (
                  <span className="px-4 py-0.5 text-xs rounded-lg bg-pink-400 self-end font-medium text-light">
                    -16%
                  </span>
                )}
              </div>
              <div className="space-x-2">
                <button className="p-2 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700">
                  <ShoppingCartIcon className="w-5" />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ListProducts
