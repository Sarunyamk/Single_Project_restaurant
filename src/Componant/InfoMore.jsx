import React from 'react'

import { FaUserShield,FaBookOpen ,FaShoppingCart  } from "react-icons/fa";
import { AiTwotoneCustomerService } from "react-icons/ai";

import { Link } from 'react-router-dom';


export default function InfoMore() {
  return (
    <div >
        <div className='text-red mx-auto my-40 flex justify-center items-center'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-8'>

                <Link to='/about'>
                    <aside className='w-full h-60 border-2 border-red bg-slate flex flex-col justify-center items-center text-center'>
                        <FaUserShield className='w-20 h-20 hover:scale-110 hover:text-yellow duration-200' />
                        <div className='p-4'>
                            <h2 className='font-head'>Our Client</h2>
                            <p className='font-second'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </aside>
                </Link>

                <Link to='/menu'>                
                    <aside className='w-full h-60 border-2 border-red bg-slate flex flex-col justify-center items-center text-center'>
                        <FaBookOpen className='w-20 h-20 hover:scale-110 hover:text-yellow duration-200' />   
                        <div className='p-4'>
                            <h2 className='font-head'>Quality Food</h2>
                            <p className='font-second'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </aside>                
                </Link>

                <Link to='/contact'>                
                    <aside className='w-full h-60 border-2 border-red bg-slate flex flex-col justify-center items-center text-center'>
                        <AiTwotoneCustomerService className='w-20 h-20 hover:scale-110 hover:text-yellow duration-200' />
                        <div className='p-4'>
                            <h2 className='font-head'>Service</h2>
                            <p className='font-second'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </aside>                    
                </Link>

                <Link to='/menu'>                
                    <aside className='w-full h-60 border-2 border-red bg-slate flex flex-col justify-center items-center text-center'>
                        <FaShoppingCart className='w-20 h-20 hover:scale-110 hover:text-yellow duration-200' />
                        <div className='p-4'>
                            <h2 className='font-head'>Online Order</h2>
                            <p className='font-second'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </aside>                
                </Link>

            </div>
        </div>
    </div>
  )
}
