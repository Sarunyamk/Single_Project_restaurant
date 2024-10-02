import React from 'react'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
  return (
    <div>
      <aside className='bg-yellow w-1/4 h-screen mt-24 flex flex-col justify-center items-center gap-20'>

      <Link to='/admin/editmenu'>Manage Menu</Link>                    
      <Link to='/admin/report'>Report</Link>                  
                              
      </aside>
    </div>
  )
}

export default SideBarAdmin
