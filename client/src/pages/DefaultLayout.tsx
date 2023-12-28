import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useGetUser } from '../services/auth/useGetUser'
import Spinner from '../components/ui/Spinner'

const DefaultLayout = () => {
  const { isLoading, isError } = useGetUser()

  return (
    <div>
      {isLoading || isError ? (
        <div className="absolute w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <ScrollRestoration getKey={location => location.key} />
          <Outlet />
        </>
      )}
    </div>
  )
}

export default DefaultLayout
