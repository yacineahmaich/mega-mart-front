import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './pages/customer/DefaultLayout'
import Home from './pages/customer/Home'
import ProductDetails from './pages/customer/ProductDetails'
import Cart from './pages/customer/Cart'
import Login from './pages/guest/Login'
import Signup from './pages/guest/Signup'
import AuthLayout from './pages/guest/AuthLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: ':slug',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'account',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
])

export default router
