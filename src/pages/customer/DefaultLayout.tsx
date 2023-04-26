import { Outlet } from 'react-router'
import Header from '../../components/customer/Header'
import Footer from '../../components/customer/Footer'
import Navigation from '../../components/customer/Navigation'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
