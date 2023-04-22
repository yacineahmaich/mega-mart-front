import { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import MainFilter from '../components/home/MainFilter'
import SecondaryFilter from '../components/home/SecondaryFilter'
import ListProducts from '../components/home/ListProducts'
import Subscribe from '../components/home/Subscribe'

const Home: FC = () => {
  return (
    <div className="px-2 space-y-6 sm:space-y-8 sm:px-0">
      <div className="container mx-auto">
        <h2 className="text-sm font-semibold sm:text-lg text-dark-700">
          <ChevronDoubleRightIcon className="inline w-4 mr-1 font-bold align-middle" />
          Thousands of products to meet all your desires
        </h2>
      </div>

      <section className="container grid grid-cols-1 mx-auto gap-y-3 md:gap-4 md:grid-cols-products">
        <MainFilter />
        <SecondaryFilter />
        <ListProducts />
      </section>
      <Subscribe />
    </div>
  )
}

export default Home
