import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/admin/ui/Navbar'
import SideBar from '../../components/admin/ui/SideBar'
import { useGetUser } from '../../features/auth/useGetUser'

const AdminLayout = () => {
  const { data: user } = useGetUser()

  if (!user?.isAdmin) return <Navigate to="/" />

  return (
    <div className="w-full pl-admin-sidebar">
      <SideBar />
      <Navbar />
      <main className="w-full min-h-screen p-6 bg-light">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
