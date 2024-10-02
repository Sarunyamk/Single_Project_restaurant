import React from 'react'
import { Link } from 'react-router-dom'
import CategoryMenuAdmin from '../adminComponant/CategoryMenuAdmin';
import MenuAdmin from '../adminComponant/MenuAdmin';

const MenuAdminPage = () => {
  return (
    <div>
      <Link to='/admin'><button className='bg-yellow m-32 px-5 py-3 font-main rounded-lg'>Back</button></Link>
      
      <CategoryMenuAdmin />
      <MenuAdmin />
     
    </div>
  )
}

export default MenuAdminPage
