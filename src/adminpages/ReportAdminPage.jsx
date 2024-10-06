import React from 'react'
import { Link } from 'react-router-dom'
import ReportAdmin from '../adminComponant/ReportAdmin'

const ReportAdminPage = () => {
  return (
    <div>
      <Link to='/admin'><button className='bg-yellow m-32 px-5 py-3 font-main rounded-lg'>Back</button></Link>

      <ReportAdmin/> 
    </div>
  )
}

export default ReportAdminPage
