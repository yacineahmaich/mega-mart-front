import { FC } from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

import { useParams } from 'react-router-dom'
import Sort from '../../components/client/category/Sort'
import Filter from '../../components/client/category/Filter'
import ListProducts from '../../components/client/category/ListProducts'

import Navigation from '../../components/client/Navigation'
import {
  RectangleStackIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline'
import { useCategoryProducts } from '../../services/category/useCategoryProducts'

const HomeCategory: FC = () => {
  const { slug } = useParams()
  const { data } = useCategoryProducts(slug)

  if (!data) return <div className="min-h-screen"></div>

  const category = data?.products?.at(0)?.category?.name

  const parentCategory = data?.products?.at(0)?.category?.parentCategory

  return (
    <>
      <Navigation
        breadcrumb={[
          {
            label: parentCategory?.name,
            href: `/mc/${parentCategory.slug}`,
            icon: RectangleStackIcon,
          },
          {
            label: category,
            icon: Square3Stack3DIcon,
          },
        ]}
      />
      <div className="min-h-screen p-3 md:p-6">
        <p className="text-sm sm:text-lg text-dark-500">
          <ChevronDoubleRightIcon className="inline w-4 mr-1 align-middle" />
          <span>
            Explore <strong>{category}</strong>
          </span>
        </p>

        <section className="grid grid-cols-1 gap-y-3 md:gap-4 md:grid-cols-[250px_auto]">
          <Sort />
          <Filter />
          <ListProducts />
        </section>
      </div>
    </>
  )
}

export default HomeCategory
