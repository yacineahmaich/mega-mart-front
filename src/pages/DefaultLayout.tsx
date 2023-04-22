import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

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
