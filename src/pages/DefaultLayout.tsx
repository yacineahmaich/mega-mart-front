import { Outlet } from 'react-router-dom'
import { useGetUser } from '../features/auth/useGetUser'

const DefaultLayout = () => {
  const { isLoading, isError } = useGetUser({ enabled: true })

  return (
    <div>
      {isLoading || isError ? null : (
        <>
          <Outlet />
        </>
      )}
    </div>
  )
}

export default DefaultLayout
