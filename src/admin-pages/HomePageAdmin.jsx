import React from 'react'
import NavBarAdmin from '../admin-components/NavbarAdmin'
import { Outlet } from 'react-router-dom'
import SideBar from '../admin-components/SideBar'


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
