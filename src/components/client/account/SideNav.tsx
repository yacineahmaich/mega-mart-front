import {
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const SideNav = () => {
  const { setUser, setToken } = useAuth()

  const handleLogout = () => {
    setUser(null)
    setToken(null)
  }

  return (
    <div className="flex flex-col items-center gap-6 border border-gray bg-warning-400">
      <div className="px-10 py-4 space-y-4">
        <img
          src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
          alt="profile"
          className="rounded-full w-36 h-36"
        />
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-bold text-dark-800">Rajae Omalk</h2>
          <p className="text-sm font-medium text-dark-500">rajae@gmail.com</p>
        </div>
      </div>
      <div className="w-full">
        <ul className="w-full bg-white divide-y divide-gray text-dark-500">
          <li>
            <NavLink
              to="."
              className={({ isActive }) => `
                flex items-center w-full gap-2 p-3
                ${
                  isActive
                    ? 'relative pl-3 transition-all duration-300 after:absolute after:left-0 after:h-full after:w-2 after:bg-dark-500 after:top-0 '
                    : ''
                }`}
              end
            >
              <UserIcon className="w-5 h-5" />
              <span className="text-sm font-bold align-bottom">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="my-orders"
              className={({ isActive }) => `
                flex items-center w-full gap-2 p-3
                ${
                  isActive
                    ? 'relative pl-3 transition-all duration-300 after:absolute after:left-0 after:h-full after:w-2 after:bg-dark-500 after:top-0 '
                    : ''
                }`}
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="text-sm font-bold align-bottom">My Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="edit-profile"
              className={({ isActive }) => `
                flex items-center w-full gap-2 p-3
                ${
                  isActive
                    ? 'relative pl-3 transition-all duration-300 after:absolute after:left-0 after:h-full after:w-2 after:bg-dark-500 after:top-0 '
                    : ''
                }`}
            >
              <PencilSquareIcon className="w-5 h-5" />
              <span className="text-sm font-bold align-bottom">
                Edit Profile
              </span>
            </NavLink>
          </li>
          <li>
            <button
              className="flex items-center w-full gap-2 p-3 text-white bg-danger-600 hover:bg-danger-500"
              onClick={handleLogout}
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5" />
              <span className="text-sm font-bold align-bottom">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav
