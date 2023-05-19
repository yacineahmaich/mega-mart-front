import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/admin/Navbar'
import SideBar from '../../components/admin/SideBar'
import { useAuth } from '../../context/Auth'
import spinner from '../../assets/icons/spinner.svg'

const AdminLayout = () => {
  const { token, isLoading } = useAuth()

  if (!token) return <Navigate to="/" />

  return (
    <div className="w-full h-screen pl-admin-sidebar">
      <SideBar />
      {isLoading ? (
        <div>
          {/* <img
            src={spinner}
            alt="spinner"
            className="w-10 h-10 mx-auto mt-6 animate-rotate animate-spin"
          /> */}
        </div>
      ) : (
        <>
          <Navbar />
          <main className="w-full min-h-screen p-6 bg-light">
            <Outlet />
          </main>
        </>
      )}
    </div>
  )
}

export default AdminLayout
