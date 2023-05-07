import { FC } from 'react'
import {
  HeartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import MiniCartButton from './MiniCartButton'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const Header: FC = () => {
  const { user, isLoading } = useAuth()

  return (
    <>
      <section className="w-full px-3 md:px-6 bg-primary-900">
        <div className="flex justify-between py-2 text-sm font-medium text-light">
          <a href="tel:+212667313710">+212667313710</a>
          <a href="mailto:jersy.shoop@gmail.com">jersy.shoop@gmail.com</a>
        </div>
      </section>

      {!isLoading && (
        <header className="w-full px-3 duration-100 animate-in slide-in-from-top-4 bg-primary-800 md:px-6">
          <div className="flex flex-wrap items-center justify-between py-4 min-h-header">
            <div>
              <Link to="/">
                <h1 className="text-xl font-bold text-white">
                  Jersy Hub
                  <span className="sr-only">Jersy Hub</span>
                </h1>
              </Link>
            </div>

            <form className="relative z-0 order-3 w-full mt-4 lg:mt-0 lg:w-1/2 lg:order-2">
              <input
                type="text"
                placeholder="Search your Jersy within thousands ..."
                className="peer w-full px-3 py-1.5 focus:py-2 transition-all outline-none rounded-lg focus:ring-0  placeholder:font-medium placeholder:text-dark-600"
              />
              <MagnifyingGlassIcon className="absolute z-50 w-5 h-5 transition-all -translate-y-1/2 right-3 top-1/2 text-dark-500 peer-focus:w-6 peer-focus:h-6" />
            </form>

            <div className="flex items-center order-2 space-x-6 lg:order-3">
              <div className="flex flex-col items-center space-y-0.5 text-sm font-medium text-white transition-colors cursor-pointer hover:text-slate-200">
                <HeartIcon className="w-6 h-6 sm:h-8 sm:w-8" />
                <span className="hidden sm:block">Favorite</span>
              </div>

              {user ? (
                <Link to="/account/profile">
                  <div className="flex flex-col items-center space-y-0.5 text-sm font-medium text-white transition-colors cursor-pointer hover:text-slate-200">
                    <UserCircleIcon className="w-6 h-6 sm:h-8 sm:w-8" />
                    <span className="hidden mt-4 uppercase sm:block">
                      {user.name}
                    </span>
                  </div>
                </Link>
              ) : (
                <Link to="/account/login">
                  <div className="flex flex-col items-center space-y-0.5 text-sm font-medium text-white transition-colors cursor-pointer hover:text-slate-200">
                    <UserCircleIcon className="w-6 h-6 sm:h-8 sm:w-8" />
                    <span className="hidden sm:block">Account</span>
                  </div>
                </Link>
              )}

              <div className="w-[1px] h-8 bg-slate-400"></div>
              <MiniCartButton />
            </div>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
