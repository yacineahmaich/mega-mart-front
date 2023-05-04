import { createBrowserRouter } from 'react-router-dom'
// Client
import ClientLayout from './pages/client/ClientLayout'
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
import ProductLayout from './pages/admin/product/ProductLayout'
import EditProduct from './pages/admin/product/EditProduct'
import ViewProduct from './pages/admin/product/ViewProduct'
import CategoryLayout from './pages/admin/category/CategoryLayout'
import CreateCategory from './pages/admin/category/CreateCategory'
import EditCategory from './pages/admin/category/EditCategory'
import ViewCategory from './pages/admin/category/ViewCategory'
import CustomerLayout from './pages/admin/customer/CustomerLayout'
import ViewCustomer from './pages/admin/customer/ViewCustomer'
import DefaultLayout from './pages/DefaultLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // Client - Routes
      {
        path: '/',
        element: <ClientLayout />,
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
            element: <ProductLayout />,
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
                path: ':id',
                element: <ViewProduct />,
              },
              {
                path: ':id/edit',
                element: <EditProduct />,
              },
            ],
          },
          {
            path: 'categories',
            element: <CategoryLayout />,
            children: [
              {
                index: true,
                element: <Categories />,
              },
              {
                path: 'create',
                element: <CreateCategory />,
              },
              {
                path: ':id',
                element: <ViewCategory />,
              },
              {
                path: ':id/edit',
                element: <EditCategory />,
              },
            ],
          },
          {
            path: 'customers',
            element: <CustomerLayout />,
            children: [
              {
                index: true,
                element: <Customers />,
              },
              {
                path: ':id',
                element: <ViewCustomer />,
              },
            ],
          },
          {
            path: 'orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
])

export default router
