import { useLocation } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'

const Navbar = () => {
  const { data: user } = useGetUser()
  const { pathname } = useLocation()

  const routerNavigation = pathname.split('/').filter(el => el !== '')

  return (
    <div className="w-full h-admin-navbar">
      <div className="flex items-center w-full h-full px-6 bg-white">
        <header className="flex items-center justify-between w-full py-3">
          <div className="space-x-1">
            {routerNavigation.map((route, idx) => (
              <span key={idx}>
                <span className="mr-1 text-sm font-medium capitalize text-dark-500">
                  {route}
                </span>
                <span>/</span>
              </span>
            ))}
          </div>

          <nav>
            <span className="inline-flex text-primary-600 font-bold items-center px-4 py-1.5 text-xs uppercase border border-primary-600">
              Welcome Back,&nbsp;<span>{user?.name}</span>
            </span>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar
