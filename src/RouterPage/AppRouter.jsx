import React from 'react'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from '../Componant/Navbar'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import ContactPage from '../pages/ContactPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import ScrollToTop from '../Utils/ScrollToTop';
import Footer from '../Componant/Footer';
import ModalMenuDetail from '../Componant/ModalMenuDetail';
import EditCustomerProfilePage from '../pages/EditCustomerProfilePage';

import ProtectRoute from './ProtectRoute';
import HomePageAdmin from '../adminpages/HomePageAdmin';
import MenuAdminPage from '../adminpages/MenuAdminPage';
import CreateMenu from '../adminComponant/CreateMenu';



import NotFoundPage from '../pages/NotFoundPage';
import ForgetPassword from '../Componant/ForgetPassword';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import Dashboard from '../adminComponant/DashBoard';
import EditUser from '../adminComponant/EditUser';
import EditOrderTable from '../adminComponant/EditOrderTable';
import ShowAllComment from '../adminComponant/ShowAllComment';
import ShowAllMenuCount from '../adminComponant/ShowAllMenuCount';






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

