import SideNav from '../../../components/account/SideNav'
import { Navigate, Outlet } from 'react-router-dom'
import { useGetUser } from '../../../services/auth/useGetUser'

const ProfileLayout = () => {
  const { data: user } = useGetUser()
  if (!user) return <Navigate to="/" />

  return (
    <section className="flex flex-col w-full min-h-screen gap-6 p-3 lg:flex-row sm:p-6">
      <div className="lg:w-1/4">
        <SideNav />
      </div>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </section>
  )
}

export default ProfileLayout
