import { createBrowserRouter } from 'react-router-dom'
// Client
import DefaultLayout from './pages/client/DefaultLayout'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails'
import Cart from './pages/client/Cart'
import Login from './pages/guest/Login'
import Signup from './pages/guest/Signup'
import AuthLayout from './pages/guest/AuthLayout'
// Admin
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/product/Products'
import Categories from './pages/admin/category/Categories'
import Customers from './pages/admin/customer/Customers'
import Orders from './pages/admin/order/Orders'
import CreateProduct from './pages/admin/product/CreateProduct'
import ProductsLayout from './pages/admin/product/ProductsLayout'
import EditProduct from './pages/admin/product/EditProduct'

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
        element: <ProductsLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: 'create',
            element: <CreateProduct />,
          },
          {
            path: ':id/edit',
            element: <EditProduct />,
          },
        ],
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
