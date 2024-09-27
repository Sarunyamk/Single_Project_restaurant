import React from 'react'
// import HomePage from '../pages/HomePage'
// import AboutPage from '../pages/AboutPage'
// import MenuPage from '../pages/MenuPage'
// import ContactPage from '../pages/ContactPage'
// import SignupPage from '../pages/SignupPage'
// import LoginPage from '../pages/LoginPage'
import NavBar from '../Componant/Navbar'
import InfoMore from '../Componant/InfoMore'
import AboutUs from '../Componant/About'
import PopularMenu from '../Componant/PopularMenu'
import Menu from '../Componant/Menu'
import OurClientComment from '../Componant/ClientComment'
import Contact from '../Componant/Contact'
import Footer from '../Componant/Footer'
import BackGroundSausage from '../Componant/BackGroundSausage'

const AllPage = () => {
  return (
    <div>
    <NavBar/>
    <BackGroundSausage/>
     <InfoMore/>
     <AboutUs/>
     <PopularMenu/>
     <Menu/>
     <OurClientComment/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default AllPage
