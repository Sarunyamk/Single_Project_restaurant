import React from 'react'
import { Link } from 'react-router-dom'

import MenuAdmin from '../adminComponant/MenuAdmin';

const MenuAdminPage = () => {
  return (
    <div >
      <Link to='/admin'><button className='bg-yellow m-32 px-5 py-3 font-main rounded-lg'>Back</button></Link>     
      <Link to='/admin/createmenu'><button className='bg-yellow m-32 px-5 py-3 font-main rounded-lg'>Create menu</button></Link>     
      <MenuAdmin />
     
    </div>
  )
}

export default MenuAdminPage
