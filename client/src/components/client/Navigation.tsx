import { FC, Fragment, useState } from 'react'
import {
  Bars3BottomLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import Spinner from './ui/Spinner'
import { useMainCategories } from '../../services/main-category/useMainCategories'

type Breadcrumb = {
  icon: any
  label: string
  href?: string
}[]

const Navigation: FC<{ breadcrumb?: Breadcrumb }> = ({ breadcrumb = [] }) => {
  return (
    <nav
      className="relative flex items-center w-full px-3 py-1 text-sm font-medium border-b divide-x border-gray divide-gray"
      id="navigation"
    >
      <CategoriesDropdown />
      <Beadcrumb breadcrumb={breadcrumb} />
    </nav>
  )
}
const Beadcrumb: FC<{ breadcrumb: Breadcrumb }> = ({ breadcrumb = [] }) => {
  return (
    <div className="pl-3 space-x-2 text-dark-600">
      <Link to="/" className="hover:text-black">
        <HomeIcon className="inline-block w-5" /> Home
      </Link>
      {breadcrumb.length > 0 && <span>/</span>}
      {breadcrumb.map(({ label, href, icon: Icon }, i) => (
        <Fragment key={label}>
          {href ? (
            <Link to={href} className="hover:text-black">
              <Icon className="inline-block w-5" /> {label}
            </Link>
          ) : (
            <span>
              <Icon className="inline-block w-5" /> {label}
            </span>
          )}

          {i < breadcrumb.length - 1 && <span>/</span>}
        </Fragment>
      ))}
    </div>
  )
}

const CategoriesDropdown = () => {
  const { data, isLoading } = useMainCategories()
  const [show, setShow] = useState(false)

  return (
    <div onMouseLeave={() => setShow(false)} className="pr-3">
      <a
        role="button"
        onMouseEnter={() => setShow(true)}
        className="flex items-center px-6 py-2 text-white transition-colors rounded-lg bg-primary-600 hover:text-dark-600"
      >
        <Bars3BottomLeftIcon className="w-4 h-4 mr-2 sm:h-6 sm:w-6" />{' '}
        Categories
      </a>
      <Transition show={show}>
        <div className="absolute min-w-[200px] hover:block z-40 p-2 bg-white rounded-lg shadow-lg left-3 top-full">
          {isLoading ? (
            <Spinner />
          ) : (
            <ul className="relative space-y-1">
              {data?.map(mc => (
                <MainCategoryItem key={mc.id} mc={mc} />
              ))}
            </ul>
          )}
        </div>
      </Transition>
    </div>
  )
}

const MainCategoryItem = ({ mc }: { mc: MainCategory }) => {
  const [show, setShow] = useState(false)

  return (
    <li onMouseLeave={() => setShow(false)}>
      <Link
        to={`/mc/${mc.slug}`}
        className="flex items-center p-2 rounded-lg bg-zinc-100 hover:bg-primary-500 hover:text-white"
        onMouseEnter={() => setShow(true)}
      >
        <ChevronRightIcon className="w-3 h-3 mr-1" /> {mc.name}
      </Link>

      <Transition show={show}>
        <div className="absolute min-w-[200px] top-0 p-2 ml-2 bg-white rounded-lg shadow-lg w-fit left-full">
          <ul className="space-y-1">
            {mc?.categories?.map(category => (
              <li key={category.id}>
                <Link
                  to={`/mc/${mc.slug}/category/${category.slug}`}
                  className="flex items-center p-2 rounded-lg whitespace-nowrap bg-zinc-100 hover:bg-primary-500 hover:text-white peer"
                >
                  <ChevronRightIcon className="w-3 h-3 mr-1" /> {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </li>
  )
}
export default Navigation
