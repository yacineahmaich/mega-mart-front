import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useGetUser } from '../features/auth/useGetUser'

const DefaultLayout = () => {
  const { isLoading, isError } = useGetUser()

  return (
    <div>
      {isLoading || isError ? null : (
        <>
          <ScrollRestoration />
          <Outlet />
        </>
      )}
    </div>
  )
}

export default DefaultLayout
