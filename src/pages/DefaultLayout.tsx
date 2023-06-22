import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useGetUser } from '../features/auth/useGetUser'

const DefaultLayout = () => {
  const { isLoading, isError } = useGetUser({ enabled: true })

  return (
    <div>
      {isLoading || isError ? null : (
        <>
          <Outlet />
          <ScrollRestoration />
        </>
      )}
    </div>
  )
}

export default DefaultLayout
