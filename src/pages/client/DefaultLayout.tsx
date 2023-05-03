import { Outlet } from 'react-router'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import Navigation from '../../components/client/Navigation'
import { useGetUser } from '../../features/auth/useGetUser'

const DefaultLayout = () => {
  const { isLoading } = useGetUser()

  return (
    <>
      <Header isLoadingUser={isLoading} />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
