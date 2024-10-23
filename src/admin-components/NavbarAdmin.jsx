import React from 'react'

import { Link } from 'react-router-dom'
import useAppStore from '../stores/appStore'

import myLogo from '../img/imgBg/myLogo.png'


export default function NavBarAdmin() {

    const user = useAppStore((state) => state.user)
    const actionLogout = useAppStore((state) => state.actionLogout)

    const hdlClickLogout = () => {
        actionLogout()
    }
    return (
        <div >
            <nav className=' top-0 left-0 w-full flex justify-around h-24 items-center  bg-red-gradient fixed z-10'>
                <div className='w-40 h-24'>

                    <img src={myLogo} className='w-full h-full object-contain' />

                </div>
                <div className='flex gap-10 items-center '>
                    <div className='flex items-end gap-10'>
                        <h3 className='font-main text-yellow uppercase  tracking-wider'>{user.user.firstname}</h3>
                        <Link to='/login' onClick={hdlClickLogout} className='font-main underline text-yellow hover:text-white duration-200' >Logout</Link>
                    </div>
                </div>

            </nav>

        </div>
    )
}
