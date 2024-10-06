import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAppStore from '../zustand/appStore';
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import myLogo from '../img/imgBg/myLogo.png';

export default function NavbarResponsive() {

    const user = useAppStore((state) => state.user);
    const [isOpen, setIsOpen] = useState(true);     
    const [isDropdownUserOpen, setDropdownUserOpen] = useState(false); 

    const actionLogout = useAppStore((state) => state.actionLogout);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const toggleDropdownUser = () => {
        setDropdownUserOpen(!isDropdownUserOpen);
    };
    
    const hdlClickLogout = () => {
        actionLogout();
    };

    return (
        <div>
            <header className='bg-red-gradient text-yellow w-full h-24 fixed z-10'>
                <nav className='flex justify-between items-center px-12 h-24'>
                    <Link to="/"> 
                        <img src={myLogo} alt="M&M Restaurant Logo" className='w-40 h-24 object-contain' />
                    </Link>
                    <div className={`absolute left-0 ${isOpen ? 'top-24' : 'hidden'} 
                                    bg-yellow w-full flex flex-col items-center gap-6 py-2 font-head text-white
                                    lg:static lg:flex-row lg:justify-between lg:gap-8 lg:py-0 lg:bg-transparent`}>
                        <ul className='flex flex-col items-center gap-4 lg:flex-row lg:gap-8'>
                            <li><Link to="/" className='font-head'>Home</Link></li>
                            <li><Link to='/about' className='font-head'>About</Link></li>
                            <li><Link to='/menu' className='font-head'>Menu</Link></li>
                            <li><Link to='/contact' className='font-head'>Contact</Link></li>
                        </ul>
                        { user ? 
                        <div className='flex gap-10 items-center '>
                            
                            <div className='relative'>

                            <div className='flex items-end'>
                                <h3  className='font-main text-black '>{user.user.firstname}</h3>
                                <IoMdArrowDropdown className=' cursor-pointer' onClick={toggleDropdownUser}/>
                            </div>
                            {
                                isDropdownUserOpen && (
                                <div className='absolute  mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg'>
                                    <ul className='py-2'>
                                    <li>
                                        <Link to='/settingcustomer' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                                            Setting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={hdlClickLogout} to='/login' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                                            Logout
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                )
                            }
                            </div>
                        <Link to='/cart'>
                            <div className='w-8 h-8 relative '>
                            <FaCartShopping className='w-8 h-8 text-white'/>
                            
                                <div className='absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center bg-gray-700'>
                                    <h1 className='text-white text-xs'>1</h1>
                                </div>
                            </div> 
                        </Link>
                        </div> 
                        : <div className='flex gap-10'>
                        <Link to='/signup' className='font-head underline text-yellow'>Sign up</Link>
                        <Link to='/login' className='font-head underline text-yellow' >Login</Link>
                        </div>}
                       
                    </div>
                    <div className='lg:hidden'>
                        <FaBars onClick={handleToggle} />
                    </div>
                </nav>
            </header>
        </div>
    );
}
