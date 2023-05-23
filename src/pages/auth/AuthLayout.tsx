import { Navigate, Outlet } from 'react-router-dom'
import { useGetUser } from '../../features/auth/useGetUser'

const AuthLayout = () => {
  const { data: user } = useGetUser()

  if (user) return <Navigate to="/" />

  return (
    <section className="px-3">
      <div className="max-w-lg px-12 py-8 mx-auto my-10 bg-white border rounded-lg shadow-lg md:px-16 lg:px-16 md:my-20 border-gray">
        <Outlet />
      </div>
    </section>
  )
}

export default AuthLayout
