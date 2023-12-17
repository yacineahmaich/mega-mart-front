import { Outlet } from 'react-router'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import Subscribe from '../../components/client/Subscribe'
import RequireAuthModal from '../../components/client/ui/RequireAuthModal'

const ClientLayout = () => {
  return (
    <>
      <RequireAuthModal />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <Subscribe /> */}
      <Footer />
    </>
  )
}

export default ClientLayout
