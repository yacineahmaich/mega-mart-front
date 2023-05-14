import { createBrowserRouter } from 'react-router-dom'
// Client
import ClientLayout from './pages/client/ClientLayout'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails'
import Cart from './pages/client/Cart'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import AuthLayout from './pages/auth/AuthLayout'
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
import ProfileLayout from './pages/client/Profile/ProfileLayout'
import Profile from './pages/client/Profile/Profile'
import MyOrders from './pages/client/Profile/MyOrders'
import EditProfile from './pages/client/Profile/EditProfile'

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
            children: [
              // Auth
              {
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
              // Profile
              {
                path: 'profile',
                element: <ProfileLayout />,
                children: [
                  {
                    index: true,
                    element: <Profile />,
                  },
                  {
                    path: 'my-orders',
                    element: <MyOrders />,
                  },
                  {
                    path: 'edit-profile',
                    element: <EditProfile />,
                  },
                ],
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
