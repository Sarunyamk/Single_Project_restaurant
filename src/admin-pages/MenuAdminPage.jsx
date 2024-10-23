import React from 'react'
import { Link } from 'react-router-dom'

import MenuAdmin from '../admin-components/MenuAdmin';

const MenuAdminPage = () => {
  return (
    <div className='w-4/5'>
      <Link to='/admin/manage/create-menu'><button style={{ margin: '10rem 0 5rem 5rem' }} className='bg-yellow px-5 py-3 font-main rounded-lg'>Create menu</button></Link>
      <MenuAdmin />

    </div>
  )
}

export default MenuAdminPage
