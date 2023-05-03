import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/admin/Navbar'
import SideBar from '../../components/admin/SideBar'
import { useAuth } from '../../context/Auth'

const AdminLayout = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/" />

  return (
    <div className="w-full h-screen pl-admin-sidebar">
      <SideBar />
      <Navbar />
      <main className="w-full p-6 bg-light">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
