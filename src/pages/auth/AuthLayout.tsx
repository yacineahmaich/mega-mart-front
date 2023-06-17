import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'
import backgroud from '../../assets/images/auth-bg.png'
import clsx from 'clsx'

const AuthLayout = () => {
  const { data: user } = useGetUser()

  if (user) return <Navigate to="/" />

  return (
    <section
      className="relative px-3 bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroud})` }}
    >
      <div className="max-w-lg mx-auto my-10 bg-white border rounded-lg shadow-lg md:my-20 border-gray">
        <div className="flex w-full font-semibold divide-x rounded-t-lg text-dark-500 divide-gray">
          <NavLink
            to="/account/login"
            className={({ isActive }) =>
              clsx('flex-1 p-4 text-center border-b border-gray', {
                'border-b-0': isActive,
              })
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/account/signup"
            className={({ isActive }) =>
              clsx('flex-1 p-4 text-center border-b border-gray', {
                'border-b-0': isActive,
              })
            }
          >
            Sign up
          </NavLink>
        </div>
        <div className="px-12 py-8 md:px-16 lg:px-16">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default AuthLayout
