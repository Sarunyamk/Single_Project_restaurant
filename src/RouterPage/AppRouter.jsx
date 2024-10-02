import React from 'react'

import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import NavBar from '../Componant/Navbar'
import HomePage from '../pages/HomePage'
import AboutPage from './../pages/AboutPage';
import MenuPage from './../pages/MenuPage';
import ContactPage from './../pages/ContactPage';
import SignupPage from './../pages/SignupPage';
import LoginPage from './../pages/LoginPage';
import ScrollToTop from '../Utils/ScrollToTop';
import Footer from '../Componant/Footer';
import CartPage from '../pages/CartPage';
import EditCustomerProfilePage from '../pages/EditCustomerProfilePage';

import HomePageAdmin from '../adminpages/HomePageAdmin';
import MenuAdminPage from '../adminpages/MenuAdminPage';
import ReportAdminPage from '../adminpages/ReportAdminPage';
import ProtectRoute from './ProtectRoute';


const pageRouter = createBrowserRouter([
  {
        path : '/admin',
        element:  <ProtectRoute element={<MenuAdminPage/>}  allow={["ADMIN"]}/>    ,
        children: [
            {path : 'editmenu',element : <MenuAdminPage/>},
            {path : 'report',element : <ReportAdminPage/>},
        ]
  },
  {
    path : '/',
    element : (
      <div>
         <NavBar/> 
         <Outlet/>         
         <Footer/>
        <ScrollToTop/>
       
      </div>
    ),
    children : [
      {path : '',element : <HomePage/>},
      {path : 'about',element : <AboutPage/>},
      {path : 'menu',element : <MenuPage/>},
      {path : 'contact',element : <ContactPage/>},
      {path : 'signup',element : <SignupPage/> },
      {path : 'login',element : <LoginPage/>},
      {path : 'cart',element : <CartPage/>},
      {path : 'settingcustomer',element : <EditCustomerProfilePage/>},
    ]
  },
  
  {
    path : '/*',element : <div>Not Found</div>
  }
])

export default function AppRouter() {
  return (
    <div>
      <RouterProvider router={pageRouter}/>
    </div>
  )
}

