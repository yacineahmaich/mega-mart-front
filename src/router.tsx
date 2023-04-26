import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './pages/client/DefaultLayout'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails'
import Cart from './pages/client/Cart'
import Login from './pages/guest/Login'
import Signup from './pages/guest/Signup'
import AuthLayout from './pages/guest/AuthLayout'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import Categories from './pages/admin/Categories'
import Customers from './pages/admin/Customers'
import Orders from './pages/admin/Orders'

const router = createBrowserRouter([
  // Client - Routes
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
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
  // Admin - Routes
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
])

export default router
