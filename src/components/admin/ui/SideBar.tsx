import {
  ShoppingCartIcon,
  UserGroupIcon,
  UserCircleIcon,
  RectangleGroupIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  RectangleStackIcon,
  GiftIcon,
  BanknotesIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import { NavLink, Link } from 'react-router-dom'
import { useLogout } from '../../../features/auth/useLogout'

const manageStoreNavigation = [
  {
    label: 'Products',
    path: 'products',
    Icon: RectangleGroupIcon,
  },
  {
    label: 'Categories',
    path: 'categories',
    Icon: Square3Stack3DIcon,
  },
  {
    label: 'Main Categories',
    path: 'main-categories',
    Icon: RectangleStackIcon,
  },
  {
    label: 'Customers',
    path: 'customers',
    Icon: UserGroupIcon,
  },
  {
    label: 'Orders',
    path: 'orders',
    Icon: ShoppingCartIcon,
  },
]

const othersNavigation = [
  {
    label: 'Discounts',
    path: 'discounts',
    Icon: BanknotesIcon,
  },
]

const SideBar = () => {
  const { mutate: logout, isLoading: isLoggingOut } = useLogout()

  return (
    <div className="fixed top-0 left-0 z-10 flex flex-col h-screen border-r shadow w-admin-sidebar border-gray">
      <div className="py-6 text-center border-b border-gray">
        <Link to="/">
          <h1 className="text-lg font-bold text-primary-400">Mega - Mart</h1>
        </Link>
      </div>
      <aside className="flex-1 w-full px-4 overflow-y-auto">
        <div className="my-6">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `relative flex items-stretch gap-2 pl-3 text-primary-800 hover:text-primary-400 transition-colors ${
                isActive
                  ? 'after:absolute after:h-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:rounded-r after:bg-primary-500'
                  : ''
              }`
            }
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="text-sm">Dashboard</span>
          </NavLink>
        </div>

        <div className="px-3 space-y-3">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase text-dark-600">
              Manage store
            </h3>
            <ul>
              {manageStoreNavigation.map((item, idx) => (
                <li className="py-2" key={idx}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-stretch gap-3 pl-3 text-primary-800 hover:text-primary-400 transition-colors ${
                        isActive
                          ? 'after:absolute after:h-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:rounded-r after:bg-primary-500'
                          : ''
                      }`
                    }
                    end
                  >
                    <item.Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase text-dark-600">
              Others
            </h3>
            <ul>
              {othersNavigation.map((item, idx) => (
                <li className="py-2" key={idx}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-stretch gap-3 pl-3 text-primary-800 hover:text-primary-400 transition-colors ${
                        isActive
                          ? 'after:absolute after:h-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:rounded-r after:bg-primary-500'
                          : ''
                      }`
                    }
                  >
                    <item.Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <footer className="p-3 border-t border-gray">
        <h3 className="mb-3 text-xs font-semibold uppercase text-dark-600">
          managage account
        </h3>

        <div className="flex flex-col w-full">
          <ul>
            <li className="py-2">
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  `relative flex  cursor-default items-stretch gap-3 pl-3 text-primary-800  ${
                    isActive
                      ? 'after:absolute after:h-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-2 after:rounded-r after:bg-red-500'
                      : ''
                  }`
                }
              >
                <UserCircleIcon className="w-5 h-5" />
                <span className="text-md">Profile</span>
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  `relative flex  cursor-default items-stretch gap-3 pl-3 text-primary-800  ${
                    isActive
                      ? 'after:absolute after:h-full after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-2 after:rounded-r after:bg-red-500'
                      : ''
                  }`
                }
              >
                <Cog8ToothIcon className="w-5 h-5" />
                <span className="text-md">Settings</span>
              </NavLink>
            </li>
          </ul>

          <button
            className="justify-center flex items-center gap-1 px-3 py-1.5 font-medium text-white rounded bg-danger-300 hover:bg-danger-500 tranistion-colors"
            onClick={() => logout()}
          >
            {isLoggingOut ? (
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            )}
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default SideBar
