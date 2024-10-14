import React from 'react'
import NavBarAdmin from '../adminComponant/NavbarAdmin'
import { Outlet } from 'react-router-dom'
import SideBar from '../adminComponant/SideBar'



const HomePageAdmin = () => {
  return (
    <div>
      <NavBarAdmin />
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>

    </div>
  )
}

export default HomePageAdmin
