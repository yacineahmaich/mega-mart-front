import { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import MainFilter from '../components/home/MainFilter'
import SecondaryFilter from '../components/home/SecondaryFilter'
import ListProducts from '../components/home/ListProducts'
import Subscribe from '../components/home/Subscribe'

const Home: FC = () => {
  return (
    <div className="space-y-12">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold text-dark-700">
          <ChevronDoubleRightIcon className="inline w-4 mr-1 font-bold align-middle" />
          Thousands of products to meet all your desires
        </h2>
      </div>

      <section className="container grid gap-4 mx-auto grid-cols-products">
        <MainFilter />
        <SecondaryFilter />
        <ListProducts />
      </section>
      <Subscribe />
    </div>
  )
}

export default Home
