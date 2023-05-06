import SideNav from '../../../components/client/account/SideNav'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const ProfileLayout = () => {
  const { token, isLoading } = useAuth()

  if (!token) return <Navigate to="/" />

  return (
    <section className="flex w-full min-h-screen gap-6 px-3 sm:px-6">
      {isLoading ? (
        <div className="w-full mb-3">
          <img
            src="https://i.stack.imgur.com/RgwrS.png"
            alt="spinner"
            className="w-8 h-8 mx-auto duration-1000 animate-spin"
          />
        </div>
      ) : (
        <>
          <div className="w-1/4">
            <SideNav />
          </div>
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </>
      )}
    </section>
  )
}

export default ProfileLayout
