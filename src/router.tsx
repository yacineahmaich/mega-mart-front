import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
// Auth
import AuthLayout from './pages/auth/AuthLayout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
// Client
import ClientLayout from './pages/client/ClientLayout'
import Home from './pages/client/Home'
import ProductDetails from './pages/client/ProductDetails'
import Cart from './pages/client/Cart'
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
import CategoryLayout from './pages/admin/category/CategoryLayout'
import CreateCategory from './pages/admin/category/CreateCategory'
import EditCategory from './pages/admin/category/EditCategory'
import CustomerLayout from './pages/admin/customer/CustomerLayout'
import ProfileLayout from './pages/client/Profile/ProfileLayout'
import Profile from './pages/client/Profile/Profile'
import MyOrders from './pages/client/Profile/MyOrders'
import EditProfile from './pages/client/Profile/EditProfile'
import NotFound from './pages/NotFound'
import Category from './pages/client/Category'
import MainCategory from './pages/client/MainCategory'
import Maincategories from './pages/admin/main-category/Maincategories'
import MainCategoryLayout from './pages/admin/main-category/MainCategoryLayout'
import CreateMainCategory from './pages/admin/main-category/CreateMainCategory'
import EditMainCategory from './pages/admin/main-category/EditMainCategory'
import Offers from './pages/admin/offer/Offers'
import CreateOffer from './pages/admin/offer/CreateOffer'
import Discounts from './pages/admin/discount/Discounts'
import CreateDiscount from './pages/admin/discount/CreateDiscount'
import EditDiscount from './pages/admin/discount/EditDiscount'
import EditOffer from './pages/admin/offer/EditOffer'
import CheckoutLayout from './pages/client/Checkout/CheckoutLayout'
import PlaceOrder from './pages/client/Checkout/PlaceOrder'
import Delivery from './pages/client/Checkout/Delivery'
import PaymentMethod from './pages/client/Checkout/PaymentMethod'
import VerifyPayment from './pages/client/VerifyPayment'
import Order from './pages/client/Profile/Order'
import OrderLayout from './pages/admin/order/OrderLayout'

import queryClient from './query-client'
import dashboardLoader from './features/admin/dashboard/loader'
import homeLoader from './features/client/home/loader'
import mCategoryLoader from './features/client/main-category/loader'
import ErrorPage from './pages/client/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // Checkout
      {
        path: 'checkout',
        element: <CheckoutLayout />,
        children: [
          {
            index: true,
            element: <Delivery />,
          },
          {
            path: 'payment-method',
            element: <PaymentMethod />,
          },
          {
            path: 'place-order',
            element: <PlaceOrder />,
          },
        ],
      },
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
          },
          {
            path: 'products/:slug',
            element: <ProductDetails />,
          },
          {
            path: 'cart',
            element: <Cart />,
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
                path: ':id/edit',
                element: <EditCategory />,
              },
            ],
          },
          {
            path: 'main-categories',
            element: <MainCategoryLayout />,
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
            path: 'customers',
            element: <CustomerLayout />,
            children: [
              {
                index: true,
                element: <Customers />,
              },
            ],
          },
          {
            path: 'orders',
            element: <OrderLayout />,
            children: [
              {
                index: true,
                element: <Orders />,
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
