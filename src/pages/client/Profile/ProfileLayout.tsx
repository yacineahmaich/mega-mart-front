import SideNav from '../../../components/client/account/SideNav'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <section className="flex w-full min-h-screen gap-6 px-3 sm:px-6">
      <div className="w-1/4">
        <SideNav />
      </div>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </section>
  )
}

export default ProfileLayout
