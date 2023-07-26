import { FC } from 'react'
import { HeartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import MiniCartButton from './miniCart/MiniCartButton'
import { Link } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'
import useSavedState from '../../store/favorite'
import Search from './Search'

const Header: FC = () => {
  const { data: user } = useGetUser()

  const { items } = useSavedState()

  return (
    <>
      <section className="w-full px-3 md:px-6 bg-primary-900">
        <div className="flex justify-between py-2 text-sm font-medium text-light">
          <a href="tel:+212767313710">+212767313710</a>
          <a href="mailto:yacineahmaich@gmail.com">megamart.shoop@gmail.com</a>
        </div>
      </section>

      <header className="w-full px-3 bg-primary-800 md:px-6">
        <div className="flex flex-wrap items-center justify-between py-4 min-h-header">
          <div>
            <Link to="/">
              <h1 className="text-xl font-bold text-white">
                Mega Mart
                <span className="sr-only">Mega Mart</span>
              </h1>
            </Link>
          </div>

          <Search />

          <div className="flex items-center order-2 space-x-6 lg:order-3">
            <Link
              to="/favorite"
              className="relative flex flex-col items-center space-y-0.5 text-sm font-medium text-white transition-colors cursor-pointer hover:text-slate-200"
            >
              <HeartIcon className="w-6 h-6 sm:h-8 sm:w-8" />
              <span className="hidden sm:block">Favorite</span>
              {items?.length > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full text-dark-600 bg-warning-500 translate-x-1/3 -translate-y-1/3">
                  {items.length}
                </span>
              )}
            </Link>

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
    </>
  )
}

export default Header
