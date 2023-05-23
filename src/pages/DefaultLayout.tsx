import { Outlet } from 'react-router-dom'
import { useGetUser } from '../features/auth/useGetUser'

const DefaultLayout = () => {
  const { isLoading } = useGetUser({ enabled: true })

  return <div>{isLoading ? null : <Outlet />}</div>
}

export default DefaultLayout
