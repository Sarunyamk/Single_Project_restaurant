import React from 'react'
import NavBarAdmin from '../adminComponant/NavbarAdmin'
import { Outlet } from 'react-router-dom'


const HomePageAdmin = () => {
  return (
    <div>
      <NavBarAdmin/>
      <Outlet/>
    </div>
  )
}

export default HomePageAdmin
