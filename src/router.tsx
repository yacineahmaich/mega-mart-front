import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
// Auth
import AuthLayout from './pages/auth/AuthLayout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
// Client
import Cart from './pages/client/Cart'
import ClientLayout from './pages/client/ClientLayout'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails'
// Admin
import NotFound from './pages/NotFound'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Categories from './pages/admin/category/Categories'
import CreateCategory from './pages/admin/category/CreateCategory'
import EditCategory from './pages/admin/category/EditCategory'
import Customers from './pages/admin/customer/Customers'
import CreateDiscount from './pages/admin/discount/CreateDiscount'
import Discounts from './pages/admin/discount/Discounts'
import EditDiscount from './pages/admin/discount/EditDiscount'
import CreateMainCategory from './pages/admin/main-category/CreateMainCategory'
import EditMainCategory from './pages/admin/main-category/EditMainCategory'
import Maincategories from './pages/admin/main-category/Maincategories'
import CreateOffer from './pages/admin/offer/CreateOffer'
import EditOffer from './pages/admin/offer/EditOffer'
import Offers from './pages/admin/offer/Offers'
import Orders from './pages/admin/order/Orders'
import CreateProduct from './pages/admin/product/CreateProduct'
import EditProduct from './pages/admin/product/EditProduct'
import Products from './pages/admin/product/Products'
import Category from './pages/client/Category'
import Checkout from './pages/client/Checkout'
import MainCategory from './pages/client/MainCategory'
import EditProfile from './pages/client/Profile/EditProfile'
import MyOrders from './pages/client/Profile/MyOrders'
import Order from './pages/client/Profile/Order'
import Profile from './pages/client/Profile/Profile'
import ProfileLayout from './pages/client/Profile/ProfileLayout'
import VerifyPayment from './pages/client/VerifyPayment'

import dashboardLoader from './features/admin/dashboard/loader'
import categoryLoader from './features/client/category/loader'
import homeLoader from './features/client/home/loader'
import mCategoryLoader from './features/client/main-category/loader'
import productLoader from './features/client/product/loader'
import OrderDetail from './pages/admin/order/OrderDetail'
import ErrorPage from './pages/client/ErrorPage'
import Favorite from './pages/client/Favorite'
import queryClient from './query-client'
import ManageStoreLayout from './components/admin/ui/ManageStoreLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // Client - Routes
      {
        path: '/',
        element: <ClientLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: homeLoader(queryClient),
          },
          {
            path: 'mc/:slug',
            element: <MainCategory />,
            loader: mCategoryLoader(queryClient),
          },
          {
            path: 'mc/:mcslug/category/:slug',
            element: <Category />,
            loader: categoryLoader(queryClient),
          },
          {
            path: 'products/:slug',
            element: <ProductDetails />,
            loader: productLoader(queryClient),
          },
          {
            path: 'cart',
            element: <Cart />,
          },
          {
            path: 'favorite',
            element: <Favorite />,
          },
          {
            path: 'cart/checkout/:session',
            element: <VerifyPayment />,
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
                    path: 'my-orders/:id',
                    element: <Order />,
                  },
                  {
                    path: 'edit-profile',
                    element: <EditProfile />,
                  },
                ],
              },
            ],
          },
          {
            path: '*',
            element: <NotFound backUrl="/" backText="Back Home" />,
          },
        ],
      },
      // Checkout
      {
        path: 'checkout',
        element: <Checkout />,
      },
      // Admin - Routes
      {
        path: '/dashboard',
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: dashboardLoader(queryClient),
          },
          {
            element: <ManageStoreLayout />,
            children: [
              {
                path: 'products',
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
                    path: ':id/edit',
                    element: <EditCategory />,
                  },
                ],
              },
              {
                path: 'main-categories',
                children: [
                  {
                    index: true,
                    element: <Maincategories />,
                  },
                  {
                    path: 'create',
                    element: <CreateMainCategory />,
                  },
                  {
                    path: ':id/edit',
                    element: <EditMainCategory />,
                  },
                ],
              },

              {
                path: 'customers',
                children: [
                  {
                    index: true,
                    element: <Customers />,
                  },
                ],
              },
              {
                path: 'orders',
                children: [
                  {
                    index: true,
                    element: <Orders />,
                  },
                  {
                    path: ':id',
                    element: <OrderDetail />,
                  },
                ],
              },
            ],
          },
          {
            path: 'discounts',
            children: [
              {
                index: true,
                element: <Discounts />,
              },
              {
                path: 'apply/:productId',
                element: <CreateDiscount />,
              },
              {
                path: ':id/edit',
                element: <EditDiscount />,
              },
            ],
          },
          {
            path: 'offers',
            children: [
              {
                index: true,
                element: <Offers />,
              },
              {
                path: 'make/:productId',
                element: <CreateOffer />,
              },
              {
                path: ':id/edit',
                element: <EditOffer />,
              },
            ],
          },
          {
            path: '*',
            element: (
              <NotFound backUrl="/dashboard" backText="Back Dashboard" />
            ),
          },
        ],
      },
    ],
  },
])

export default router
