import { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Sort from '../../components/client/home/Sort'
import Filter from '../../components/client/home/Filter'
import ListProducts from '../../components/client/home/ListProducts'
import Subscribe from '../../components/client/home/Subscribe'

const Home: FC = () => {
  return (
    <div className="px-3 space-y-6 sm:space-y-8 md:px-6">
      {/* <div className="container mx-auto"> */}
      <h2 className="text-sm font-semibold sm:text-lg text-dark-700">
        <ChevronDoubleRightIcon className="inline w-4 mr-1 font-bold align-middle" />
        Thousands of products to meet all your desires
      </h2>
      {/* </div> */}

      <section className="grid grid-cols-1 gap-y-3 md:gap-4 md:grid-cols-products">
        <Sort />
        <Filter />
        <ListProducts />
      </section>
      <Subscribe />
    </div>
  )
}

export default Home
