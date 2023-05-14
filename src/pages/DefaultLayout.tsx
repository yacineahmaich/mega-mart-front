import { Outlet } from 'react-router-dom'
import { useGetUser } from '../features/auth/useGetUser'

const DefaultLayout = () => {
  useGetUser()
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
