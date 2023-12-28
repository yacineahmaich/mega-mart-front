import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subscribe from '../../components/Subscribe'
import RequireAuthModal from '../../components/ui/RequireAuthModal'

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
