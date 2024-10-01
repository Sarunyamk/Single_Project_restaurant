import React from 'react'
import { Link } from 'react-router-dom'

const MenuAdminPage = () => {
  return (
    <div>
      <Link to='/admin'><button className='bg-yellow m-32 px-5 py-3 font-main rounded-lg'>Back</button></Link>
      
      <div className='flex gap-10 justify-center items-center'>
      <div>
        burger
      </div>
      <div>
        pizza
      </div>
      <div>
        sandwich
      </div>
      <div>
        snack
      </div>
      <div>
        beverage
      </div>
      </div>
    </div>
  )
}

export default MenuAdminPage
