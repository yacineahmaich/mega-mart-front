import React, { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import Sort from './Sort'
import Filter from './Filter'
import ListProducts from './ListProducts'

const HomeProducts: FC = React.memo(() => {
  return (
    <>
      <h2 className="text-sm font-semibold sm:text-lg text-dark-700">
        <ChevronDoubleRightIcon className="inline w-4 mr-1 font-bold align-middle" />
        Thousands of products to meet all your desires
      </h2>

      <section className="grid grid-cols-1 gap-y-3 md:gap-4 md:grid-cols-[250px_auto]">
        <Sort />
        <Filter />
        <ListProducts />
      </section>
    </>
  )
})

export default HomeProducts
