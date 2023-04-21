import { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import MainFilter from '../components/home/MainFilter'
import SecondaryFilter from '../components/home/SecondaryFilter'
import ListProducts from '../components/home/ListProducts'

const Home: FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-semibold text-dark-700">
        <ChevronDoubleRightIcon className="inline w-4 mr-1 font-bold align-middle" />
        Thousands of products to meet all your desires
      </h2>

      <section className="grid gap-4 grid-cols-products">
        <MainFilter />
        <SecondaryFilter />
        <ListProducts />
      </section>
    </div>
  )
}

export default Home
