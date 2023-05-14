import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const AuthLayout = () => {
  const { token } = useAuth()

  if (token) return <Navigate to="/" />

  return (
    <section className="px-3">
      <div className="max-w-lg px-12 py-8 mx-auto my-10 bg-white border rounded-lg shadow-lg md:px-16 lg:px-16 md:my-20 border-gray">
        <Outlet />
      </div>
    </section>
  )
}

export default AuthLayout