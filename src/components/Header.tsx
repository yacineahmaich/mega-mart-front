import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import {
  HeartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Navigation from './Navigation'

const Header = () => {
  return (
    <>
      <section className="w-full bg-primary-900">
        <div className="container flex justify-between py-2 mx-auto text-sm font-medium text-light">
          <a href="tel:+212667313710">+212667313710</a>
          <a href="mailto:jersy.shoop@gmail.com">jersy.shoop@gmail.com</a>
          {/* <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </section>

      <header className="w-full px-2 bg-primary-800 sm:px-0">
        <div className="container flex flex-wrap items-center justify-between py-4 mx-auto min-h-header">
          <div>
            <h1 className="text-xl font-bold text-white">
              <a href="#">Jersy Hub</a>
            </h1>
          </div>

          <form className="relative order-3 w-full mt-4 lg:mt-0 lg:w-1/2 lg:order-2">
            <input
              type="text"
              placeholder="Search your Jersy within thousands ..."
              className="w-full border-none rounded-lg outline-none focus:ring focus:outline-offset-2 focus:ring-primary-600 placeholder:font-medium placeholder:text-dark-600 "
            />
            <MagnifyingGlassIcon className="absolute z-50 w-6 -translate-y-1/2 right-3 top-1/2 text-dark-500" />
          </form>

          <div className="flex items-center order-2 space-x-6 lg:order-3">
            <div className="flex flex-col items-center text-sm font-medium text-white cursor-pointer hover:text-slate-200">
              <HeartIcon className="w-6 mr-1" />
              Favorite
            </div>
            <div className="flex flex-col items-center space-x-4 text-sm font-medium text-white cursor-pointer hover:text-slate-200">
              <UserCircleIcon className="w-6 mr-1" />
              My Account
            </div>
            <div className="w-[1px] h-8 bg-slate-400"></div>
            <div className="flex flex-col items-center space-x-4 text-sm font-medium cursor-pointer text-primary-600 hover:text-primary-500">
              <ShoppingBagIcon className="w-6 mr-1" />
              Cart
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  )
}

export default Header
