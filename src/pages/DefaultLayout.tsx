import { Outlet } from 'react-router-dom'
import { useGetUser } from '../features/auth/useGetUser'

const DefaultLayout = () => {
  const { isInitialLoading } = useGetUser()
  return <div>{isInitialLoading ? <p>Loading...</p> : <Outlet />}</div>
}

export default DefaultLayout
