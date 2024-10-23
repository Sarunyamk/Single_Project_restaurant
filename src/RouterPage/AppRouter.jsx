import React from 'react'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import ContactPage from '../pages/ContactPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import ScrollToTop from '../Utils/ScrollToTop';
import Footer from '../components/Footer';
import ModalMenuDetail from '../components/ModalMenuDetail';
import EditCustomerProfilePage from '../pages/EditCustomerProfilePage';

import ProtectRoute from './ProtectRoute';
import HomePageAdmin from '../admin-pages/HomePageAdmin';
import MenuAdminPage from '../admin-pages/MenuAdminPage';
import CreateMenu from '../admin-components/CreateMenu';



import NotFoundPage from '../pages/NotFoundPage';
import ForgetPassword from '../components/ForgetPassword';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import Dashboard from '../admin-components/DashBoard';
import EditUser from '../admin-components/EditUser';
import EditOrderTable from '../admin-components/EditOrderTable';
import ShowAllComment from '../admin-components/ShowAllComment';
import ShowAllMenuCount from '../admin-components/ShowAllMenuCount';



import PaymentCredit from '../components/PaymentCredit';
import Completion from '../components/Completion';
import ShowAllSaleReport from '../admin-components/ShowAllSaleReport';



const pageRouter = createBrowserRouter([

  {
    path: '/admin',
    element: <ProtectRoute
      element={<HomePageAdmin />}
      allow={["ADMIN"]} />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'manage/menu', element: <MenuAdminPage /> },
      { path: 'manage/create-menu', element: <CreateMenu /> },
      { path: 'manage/edit-orders', element: <EditOrderTable /> },
      { path: 'report/comments', element: <ShowAllComment /> },
      { path: 'report/total-unit-sold', element: <ShowAllMenuCount /> },
      { path: 'report/total-sales', element: <ShowAllSaleReport /> },
      { path: 'setting/edit-users', element: <EditUser /> },
    ]
  },
  {
    path: '/',
    element: (
      <div>
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollToTop />

      </div>
    ),
    children: [
      { path: '', element: <HomePage /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'reset-password/:token', element: <ResetPasswordPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'detail-menu', element: <ModalMenuDetail /> },
      { path: 'settingcustomer', element: <EditCustomerProfilePage /> },


      { path: 'payment', element: <PaymentCredit /> },
      { path: 'completion', element: <Completion /> },

    ]
  },


  {
    path: '/*', element: <NotFoundPage />
  }
])

export default function AppRouter() {
  return (
    <div>
      <RouterProvider router={pageRouter} />
    </div>
  )
}

